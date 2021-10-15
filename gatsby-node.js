
 /* const createPaginatedPages = require('gatsby-paginate')
 const path = require('path');

 exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
    query{
        allStrapiArticles(sort: {order: ASC, fields: published_at}) {
          edges {
            node {
              articleTitle
              articleContent
              articleImages {
                url
              }
              published_at
              article_publisher {
                publisher_name
                publisher_img {
                  url
                }
              }
            }
          }
        }
    }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.allStrapiArticles.edges,
        createPage: createPage,
        pageTemplate: 'src/templates/index.js',
        pageLength: 1, // This is optional and defaults to 10 if not used
        pathPrefix: '/blog', // This is optional and defaults to an empty string if not used
        context: {}, // This is optional and defaults to an empty object if not used
      })
      result.data.allStrapiArticles.edges.map(({ node }) => {
        createPage({
          path:  node.articleTitle.replace(/\s/g,'-'),//node.articleTitle,
          component: path.resolve('src/templates/blog_date.js'),
          context: {
            id: node.id
          }
        })
      })
      resolve()
    })

  })
}
*/