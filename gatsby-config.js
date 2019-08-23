module.exports = {
  siteMetadata: {
    author: '@Bvlktech',
    title: 'AdvancedBlog',
    description:'Advanced starter blog using Netlify CMS.',
    siteUrl: 'https://www.advancedblog.netlify.com'
  },
  plugins: [
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-robots-txt',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/static/images`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${ __dirname }/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AdvancedBlog',
        short_name: 'AdvancedBlog',
        start_url: '/',
        background_color: '#fdfdfd',
        theme_color: '#21232b',
        display: 'standalone',
        icon: 'static/images/flavor_wheel.jpg',
        icons: [
          {
            src: 'static/images/flavor_wheel.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'static/images/flavor_wheel.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [''],
        pluginConfig: {
          respectDNT: true,
          head: false
        }
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins'
          },
          {
            family: 'Oleo Script Swash Caps'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: '#2bd0c0',
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }`,
        feeds: [{
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                custom_elements: [{ 'content:encoded': edge.node.html }],
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                date: edge.node.frontmatter.date,
                description: edge.node.excerpt
              });
            });
          },
          query: `{
            allMarkdownRemark(limit: 1000, sort: { order: DESC, fields: [frontmatter___date] }) {
              edges {
                node {
                  excerpt(pruneLength: 100)
                  fields {
                    slug
                  }
                  frontmatter {
                    type
                    date(formatString: "MM / DD / YY")
                    title
                  }
                }
              }
            }
          }`,
          output: '/rss.xml',
          title: 'RSS Feed'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${ __dirname }/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify'
  ]
}