module.exports = {
  siteMetadata: {
    title: 'IP POOL',
    description:
      '',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/bg`, // wherever background images are stored
        name: `backgrounds`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            name: 'jp',
          },
        ],
        // Fields to index. If store === true value will be stored in index file.
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'logline', store: true, attributes: { boost: 5 } },
          { name: 'cats', store: true, attributes: { boost: 10 } },
          { name: 'tags', store: true, attributes: { boost: 10 } },
          { name: 'author', store: true },
          { name: 'origin', store: true },
          { name: 'publisher', store: true },
          { name: 'year', store: true },
          { name: 'owner', store: true },
          { name: 'dev', store: true },
          { name: 'property', store: true },
          { name: 'signature', store: true },
          { name: 'field', store: true },
          { name: 'spec', store: true },
          { name: 'ref', store: true },
          { name: 'content' },
          { name: 'url', store: true },
          { name: 'featuredimage', store: true },
        ],
        // How to resolve each field's value for a supported node type
        resolvers: {
        // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            logline: node => node.frontmatter.logline,
            cats: node => node.frontmatter.cats,
            tags: node => node.frontmatter.tags,
            author: node => node.frontmatter.author,
            origin: node => node.frontmatter.origin,
            publisher: node => node.frontmatter.publisher,
            year: node => node.frontmatter.year,
            owner: node => node.frontmatter.owner,
            dev: node => node.frontmatter.dev,
            property: node => node.frontmatter.property,
            signature: node => node.frontmatter.signature,
            field: node => node.frontmatter.field,
            spec: node => node.frontmatter.spec,
            ref: node => node.frontmatter.ref,
            content: node => node.rawMarkdownBody,
            url: node => node.fields.slug,
            featuredimage: node => node.frontmatter.featuredimage,
          },
        },
        //custom index file name, default is search_index.json
        filename: 'search_index.json',
        //custom options on fetch api call for search_ındex.json
        fetchOptions: {
          credentials: 'same-origin'
        },
      },
    },
  ],
}
