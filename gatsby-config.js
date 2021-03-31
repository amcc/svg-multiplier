module.exports = {
  siteMetadata: {
    title: "SVG-multiplier",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // additionalData: '@import "utilities";',
        sassOptions: {
          includePaths: ["./src/styles"],
        },
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
