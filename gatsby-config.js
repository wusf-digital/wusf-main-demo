const siteAddress = new URL('https://demo.wusf.digital')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
      title: `Tampa NPR, Local News Coverage`,
      siteUrl: `https://wusf.org`,
      author: {
        name: 'WUSF Digital Services Team'
      },
      description: 'WUSF carries NPR News and Jazz in the Tampa Bay region',
      social: {
        twitter: 'wusf'
      }
  },
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-react-helmet", 
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon_wusf-512px-32x32.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: 'demo.wusf.digital',
      protocol: siteAddress.protocol.slice(0, -1),
      hostname: siteAddress.hostname,
    },
  }, 
]
};