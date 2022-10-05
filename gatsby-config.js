module.exports = {
  siteMetadata: {
    siteUrl: `https://ludoloops.dev`
  },
  plugins: ["gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/mdx/"
    },
    __key: "pages"
  }]
}