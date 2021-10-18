module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.ludoloops.dev',
    title: 'LudoLoops',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-mdx',
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:800, 400`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
