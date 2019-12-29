module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Bunny Rabbit Blog",
        short_name: "Rabbit Blog",
        start_url: "/",
        background_color: "#66E0FF",
        theme_color: "#007acc",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "content/assets/gatsby.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-offline",
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: "My Blog",
    author: "Muhamad Ivan",
    description: "A collection of my thoughts and writings.",
    siteUrl: "https://frostmourne.blog/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/muhamadivann_",
      },
      {
        name: "github",
        url: "https://github.com/kuetabby",
      },
    ],
  },
}
