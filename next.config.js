const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.js",
  unstable_stork: true,
});

module.exports = withNextra({
  basePath: '/docs',
  i18n: {
    locales: ["en-ZA", "af-ZA"],
    defaultLocale: "en-ZA",
  },
  redirects: () => {
    return [];
  },
});
