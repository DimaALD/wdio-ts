import type { Options } from "@wdio/types";
import { CAPABILITIES } from "./browser.capabilities";
import * as dotenv from "dotenv";
import * as path from "path";
dotenv.config();

export const config: Options.Testrunner = {
  runner: "local",
  specs: [path.resolve(__dirname, "..", "features/**/*.feature")],
  framework: "cucumber",
  cucumberOpts: {
    require: ["./src/steps/**/*.ts"],
    requireModule: [],
    tagExpression: process.env.TAGS || "@smoke",
    timeout: 360000,
    format: ["pretty"],
  },
  capabilities: [CAPABILITIES.local[process.env.BROWSER || "CHROME"] as any],
  maxInstances: 10,
  waitforTimeout: 10000,
  services: ["chromedriver", "geckodriver", "edgedriver"],
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: false,
      project: "tsconfig.json",
    },
  },
  logLevel: "info",
  before: async () => {
    await browser.maximizeWindow();
  },
};
