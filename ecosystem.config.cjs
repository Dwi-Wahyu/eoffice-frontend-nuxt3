module.exports = {
  apps: [
    {
      name: "eoffice",
      port: "2520",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
