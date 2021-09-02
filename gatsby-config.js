/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images/instagram`,
      },
    },
    {
      resolve: 'gatsby-source-instagram',
      options: {
        username: '264856197',
        access_token: 'EAAD1jlVEYDYBAH9hRekgPk0jHXjVkoi9DzQ0xgUUQJNgZCie0AAvHzygkgPA1vZB649gynBZC6irAXOuZAsjp5PUqtxYi4fII78ykhYXUnPU3ZBDnXg7Ie6eAE28mZC6BmZB50JESpOSktf3W3ZCCAn2hDpWGGGkFMWzkZCRRhHfJnF7ZADZBE6Ndn8RXL8DfuOAIYZD',
        instagram_id: '17841401606190317',
      },
    },
  ],
};
