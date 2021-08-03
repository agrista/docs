import { useRouter } from "next/router";
import Logo from "components/logo"

const TITLE_WITH_TRANSLATIONS = {
  "en-ZA": "The API for Agrifood Supply Chains",
  "af-ZA": "Die API vir Landbou Voorsieningskettings",
};

export default {
  github: "https://github.com/agrista/docs",
  docsRepositoryBase: "https://github.com/agrista/docs/blob/master/pages",
  titleSuffix: " – Agrista",
  search: true,
  unstable_stork: true,
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <Logo height={38} />
      </>
    );
  },
  head: (
    <>
      {/* Favicons, meta */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Agrista is an ecommerce service for agrifood supply chains. Manage farm profile data, administer site-specific procurement, and run online procurement marketplaces."
      />
      <meta
        name="og:description"
        content="Agrista is an ecommerce service for agrifood supply chains. Manage farm profile data, administer site-specific procurement, and run online procurement marketplaces."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta
        name="twitter:image"
        content="https://docs.agrista.com/assets/images/twitter-card.jpg"
      />
      <meta name="og:title" content="Agrista: API for Agrifood Supply Chains" />
      <meta name="og:url" content="https://docs.agrista.com" />
      <meta
        name="og:image"
        content="https://docs.agrista.com/assets/images/twitter-card.jpg"
      />
      <meta name="apple-mobile-web-app-title" content="SWR" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        media="print"
        onLoad="this.media='all'"
      />
    </>
  ),
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "en-ZA":
        return "Edit this page on Github";
      case "af-ZA":
        return "Wysig hierdie bladsy op GitHub";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "af-ZA":
        return (
          <a
            href="https://agrista.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center font-semibold text-current no-underline"
          >
            <div className="pt-8 mt-12">
              <p className="text-base text-blue-gray-400 xl:text-center">
                © 2021 Agrista GmbH. All rights reserved.
              </p>
            </div>
          </a>
        );
      default:
        return (
          <a
            href="https://agrista.com"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center font-semibold text-current no-underline"
          >
            <div className="pt-8 mt-12">
              <p className="text-base text-blue-gray-400 xl:text-center">
                © 2021 Agrista GmbH. All rights reserved.
              </p>
            </div>
          </a>
        );
    }
  },
  i18n: [
    { locale: "en-ZA", text: "English (SA)" },
    { locale: "af-ZA", text: "Afrikaans" },
  ],
};
