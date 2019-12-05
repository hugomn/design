module.exports = {
  siteMetadata: {
    title: `{ui.name}`,
    name: `Hugo `,
    siteUrl: `https://hugomn.github.io/design`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/hugomn`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/hugomn`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ["/introduction", "/codeblock"],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document` }]
};
