---
title: "Setup your blog with GatsbyJS"
cover: "https://unsplash.it/1280/900/?random?Gatsby"
author: "ahmedshuhel"
date: "2019-08-08"
category: "Gatsby"
tags:
    - gatsby
    - blogging
    - react
    - v2
---

I am in the process of overhauling my blog site hosted on Github. I have been using [Hexo](https://hexo.io/) for a while for the current one as my static site generator. It served me well.

I will admit, I am not a regular blogger. Over the last year, I managed to publish only three "micro" posts. Recently, I am thinking of becoming a bit more regular in documenting things that I am doing and interests me. To give myself a little incentive, I decided to migrate to [GatsbyJS](https://www.gatsbyjs.org/) and document the process along the way.

This is the first post in a new series: Setting up your blog with GatsbyJS.

- Setup a blog with GatsbyJS
- Deploy the blog to Github
- GatsbyJS project structure: Tweak the template for your need.
- Writing a post in Gatsby
- Setup Google Analytics
- Setup Disqus for comments
- Use a Plugin: [Typography](https://www.gatsbyjs.org/packages/gatsby-plugin-typography)
- Write a Gatsby Plugin: DarkMode


## Why GatsbyJS?
New technology excites me. You don't get to play with bleeding-edge techs in the workplace more often. Professional work demands stability and that's for a good reason. But, at the same time, a software engineer needs to keep up with the latest trends to some extent. Today's latest will one day be the stable future. A personal blog seems to be a perfect place to do some experiments. I have used Jekyll, Hugo, Hexo in the past. GatsbyJS is based on [ReactJS](https://reactjs.org/) and you can also use [GraphQL](https://graphql.org/) here.


## Prerequisites
This post assumes you have Node and Yarn installed. If you don't have these setup follow the link for the installation instruction.
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/lang/en/docs/install)

## Install Gatsby CLI
We will start by installing the Gatsby CLI tool globally. The CLI provides everything we need from scaffolding a new site to deploying.

```shell
yarn global add gatsby-cli

```

## Starters
Starters are "Gatsby templates". It gives you a very good starting point. Gatsby has a large collection of starters shared by the community. Head over to https://www.gatsbyjs.org/starters/?v=2. and pick one that you like. I picked [gatsby-v2-starter-casper](https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-v2-starter-casper/)

## Scaffold
Gatsby offers a "new" command to scaffold a site. You can specify the folder name and starter template with the command.

```shell
gatsby new [folder_name] [starter_name]

```

```shell
gatsby new blog GatsbyCentral/gatsby-v2-starter-casper

```

> `GatsbyCentral/gatsby-v2-starter-casper` is the Github repository where my starter is hosted.


It will take some time for the cli to install the dependencies. Run the following command to spin up a local development server.

```shell
gatsby develop

```
It will watch all file changes and also, run a local GraphQL server at port `8000`.
You should have an output similar to this

```shell
success write out page data — 0.007 s
success write out redirect data — 0.001 s
success onPostBootstrap — 0.003 s

info bootstrap finished - 10.472 s

Browserslist: caniuse-lite is outdated. Please run next command `yarn upgrade caniuse-lite browserslist`
 DONE  Compiled successfully in 3564ms                                                                                                                                  6:09:55 PM

You can now view gatsby-starter-casper in the browser.

  http://localhost:8000/

View GraphiQL, an in-browser IDE, to explore your site's data and schema

  http://localhost:8000/___graphql

Note that the development build is not optimized.
To create a production build, use gatsby build
```

Head over to `http://localhost:8000` to browse your website. Next, we will deploy the site to Github pages.

