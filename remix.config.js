/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  future: {
    unstable_tailwind: true,
  },

  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
};
