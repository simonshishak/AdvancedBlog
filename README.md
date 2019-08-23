# AdvancedBlog

[![Netlify Status](https://api.netlify.com/api/v1/badges/92e73949-ba9b-4b42-b5ad-e2a5195f6386/deploy-status)](https://app.netlify.com/sites/advancedblog/deploys)

**Note:** This starter uses [Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/).

This repo follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Installed Dependencies

`gatsby-plugin-nprogress` [Docs](https://www.npmjs.com/package/gatsby-plugin-nprogress)

`gatsby-plugin-sass` [Docs](https://www.npmjs.com/package/gatsby-plugin-sass)

`gatsby-remark-responsive-iframe` [Docs](https://www.npmjs.com/package/gatsby-remark-responsive-iframe)

`gatsby-plugin-google-gtag` [Docs](https://www.npmjs.com/package/gatsby-plugin-google-gtag)

`react-spring` [Docs](https://www.npmjs.com/package/react-spring)

`disqus-react` [Docs](https://www.npmjs.com/package/disqus-react)

`react-icons` [Docs](https://www.npmjs.com/package/react-icons)

..and more

## Features

- A simple landing page with blog functionality built with Netlify CMS
- Create Blog posts from Netlify CMS
- Basic directory organization
- Uses `SCSS` for styling
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Uses `gatbsy-image` with Netlify-CMS preview support
- Separate components for everything
- Netlify deploy configuration
- Perfect score on Lighthouse for SEO, Accessibility and Performance and PWA!
- ..and more

## Prerequisites

- Gatsby CLI (I recommend using v2.7.17 or higher)
- Node (I recommend using v11.15.0 or higher)
- Yarn (I recommend using v1.17.3 or higher)

## Getting Started
```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/bvlktech/AdvancedBlog.git
$ cd [SITE_DIRECTORY_NAME]
$ yarn
$ yarn start
```
This will install all the projects dependencies then it it will run the app in development mode. Open [http://localhost:8000](http://localhost:8000) in the browser to view. The page will automatically reload if you make changes to the code. You will see any build errors and lint warnings that you may have in the console like as shown below.

<p align='center'>
  <img src='https://cdn.rawgit.com/marionebl/create-react-app/9f62826/screencast-error.svg' width='600' alt='Build errors'>
</p>

## Debugging

If you get an error in the console of Netlify saying something like `build script failed` or something like that if you go to the settings tab and go to the Build & Deploy section and under where it says `Build Scripts` all you have to do is put in there `npm i yarn && yarn && yarn build` and then go back to the console view and clear cache and deploy and you should see no error.

## Learn More

You can learn more about GatsbyJS in the [GatsbyJS documentation](https://www.gatsbyjs.org/docs/).

## Contributing

Contributions are always welcome, no matter how large or small. Just make a PR(:
