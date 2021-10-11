
 const createPaginatedPages = require('gatsby-paginate')
 const path = require('path');

 exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
    query{
      allStrapiArticles(sort: {order: ASC, fields: published_at}) {
        edges {
          node {
            id
            articleContent
            articleTitle
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
            id: node.id,
          }
        })
      })
      resolve()
    })

  })
}








// 
/*  const graphql = require('gatsby');
 */ // You can delete this file if you're not using it
 /*
   exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;
  
    return new Promise((resolve, reject) => {
      const blogPost = path.resolve("./src/templates/blog_date.js");
    resolve(
       graphql(`
      query{
        allStrapiArticles {
          edges {
            node {
              articleTitle
              articleContent
              articleImages {
                url
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
/*       const blogPosts = _.get(result, "data.allMarkdownRemark.edges");
 *//*
      paginate({
        createPage, // The Gatsby `createPage` function
        items: blogPost, //result.data.allStrapiArticles.edges.node, // An array of objects
        itemsPerPage: 2, // How many items you want per page
        pathPrefix: '/slog', // Creates pages like `/blog`, `/blog/2`, etc
        component:path.resolve('src/templates/blog_date.js'), // Just like `createPage()`
      }) ;

      alert("from node")
    })
    );
      // Get an array of posts from the query result
    // Fetch your items (blog posts, categories, etc).
  
    // Create your paginated pages
  });
  }
 




*/



