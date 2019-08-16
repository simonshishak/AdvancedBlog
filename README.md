# AdvancedBlog

<img src='./static/images/README.png' alt='README Image' />

[![Netlify Status](https://api.netlify.com/api/v1/badges/92e73949-ba9b-4b42-b5ad-e2a5195f6386/deploy-status)](https://app.netlify.com/sites/advancedblog/deploys)

**Note:** This starter uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

This repo follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## ChangeLog v1.1.1

Removed: `styled-components` in favor of `SCSS`
Updated: Styles due to removing `styled-components`

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Create Blog posts from Netlify CMS
- Basic directory organization
- Uses `Styled-Components` for styling
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatbsy-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Perfect score on Lighthouse for SEO, Accessibility and Performance and PWA!
- ..and more

## Prerequisites

- Node (I recommend using v11.15.0 or higher)
- yarn (I recommend using v1.17.3 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## Getting Started
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/bvlktech/AdvancedBlog.git
$ cd [SITE_DIRECTORY_NAME]
$ yarn build
$ yarn serve
```

### Setting up the CMS

Follow the [Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging

You might encounter an error in Netlify when trying to build your site all you have to do is go into the build settings in netlify and add this line to custom build rules.

```
npm install yarn && yarn && yarn build
```

And then you go to the deployments tab and clear cache and deploy and you should receive no errors from this point if you do tho don't hesitate to make a PR or contact me on Instagram or twitter @bvlktech and ill look into this as ive been having same issue but 9 times out of 10 that cmd up there^ should fix this.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Just make a PR(: