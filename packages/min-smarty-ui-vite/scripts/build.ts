// @ts-ignore
import * as fse from "fs-extra";
import * as path from "path";
import * as fs from "fs";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  // viteConfig;

  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "min-smarty-ui.umd.js";
  packageJson.module = "min-smarty-ui.esm.js";
  fse.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );

  // 拷贝 README.md文件
  fse.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(config.build.outDir + "/README.md")
  );
  fs.mkdirSync(config.build.outDir + "/assets");
  fse.copyFileSync(
    path.resolve("./assets/logo.jpeg"),
    path.resolve(config.build.outDir + "/assets/logo.jpeg")
  );
  // await build(defineConfig({}))
  const srcDir = path.resolve(__dirname, "../src/");
  fse
    .readdirSync(srcDir)
    .filter((name) => {
      // 只要目录不要文件，且里面包含index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fse.lstatSync(componentDir).isDirectory();
      return isDir && fse.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // 导出模块名
          fileName: `index`,
          formats: [`es`, `umd`],
        },
        outDir,
      };

      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      fse.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "min-smarty-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js"
        }`,
        `utf-8`
      );
    });
};

buildAll();
