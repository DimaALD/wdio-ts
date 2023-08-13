export const CAPABILITIES = {
  local: {
    CHROME: {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [],
      },
    },
    FIREFOX: {
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
    },
    EDGE: {
      browserName: "msedge",
      "ms:edgeOptions": {
        args: [],
      },
    },
  },
};
