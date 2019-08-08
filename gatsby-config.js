module.exports = {
  siteMetadata: {
    title: `João Alberto`,
    name: `João Alberto`,
    siteUrl: `https://novela.narative.co`,
    description: `João Alberto - Front-end developer and always junior`,
    hero: {
      heading: `My name is João Alberto and this is my space`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/joaodotspace`,
      },
      {
        name: `github`,
        url: `https://github.com/joao-alberto`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/joaoalbertooliveira/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Space by João Alberto`,
        short_name: `João Alberto`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
