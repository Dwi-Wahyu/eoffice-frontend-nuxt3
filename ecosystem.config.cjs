module.exports = {
  apps: [
    {
      name: "eoffice",
      script: "./.output/server/index.mjs",
      env: {
        NITRO_PORT: 2520,
        NODE_ENV: "production",
      },
    },
  ],
};
