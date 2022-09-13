module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId:
    '76cf7b32ae1f42b1be47f1d0347603a6?v=4de18e52b4bd43c7a19e34abc1a5cf8e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Islem Maboud Portfolio',
  domain: 'islemmaboud.dev',
  author: 'Islem Maboud',

  // open graph metadata (optional)
  description: 'Elegant Portfolio',
  socialImageTitle: 'Islem Maboud Aka CoderOne',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'ipenywis',
  github: 'ipenywis',
  linkedin: 'islem-maboud',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
