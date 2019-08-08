# Simplified Bundling for Aurelia Application

## Problem Description

Most of the time users/developers are in trouble with how to bundle the application with Aurelia Bundler. We have all kinds of issues around that on Github. The problem is that user often times don't know what to include in the bundle, how to include and what to exclude. It's mainly a trial and error process by looking at the network tab of the browser.

For example a typical bundle config looks like:

```javascript
    "dist/bundle": {
      includes: [
        '*',
        '*.html!text',
        '*.css!text',
        'bootstrap/css/bootstrap.css!text',
	    'aurelia-bootstrapper',
        'aurelia-fetch-client',
        'aurelia-router',
        'aurelia-animator-css',
        'github:aurelia/templating-binding',
        'github:aurelia/templating-resources',
        'github:aurelia/templating-router',
        'github:aurelia/loader-default',
        'github:aurelia/history-browser',
        'github:aurelia/logging-console'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
```

As we can see we have to manfully include the files/modules we want here. And let's not forget we also have plugins,  things are even complicated for plugins. 

In contrast to that for angular or any other jspm depended application can do this:

```shell
 jspm bundle app/boot dist/bundle.js -im
``` 

As far as users are concerned, this is far simpler and less error prone in "Most" cases. Yes there are some corner cases when user/developer needs to do some advanced stuff but the above command will work roughly 95% of the time.

As long as Aurelia is concern we cannot do that because all the application dependencies are not statically traceable as our `router` and `loader` is loading and resolving them dynamically during runtime of the app.

Although this is one of the most beautiful aspect of Aurelia as it helps promote our vision of less framework intrusion and keep the app modular over time,  it comes somewhat of disadvantage for the `Bundler`.

## Proposal 

Currently our bundler is just a thin layer on top of `JSPM/SystemJS Builder` and offers some convenience about configuring bundle and versioning bundle file etc.  In that sense, Aurelia Bundler or JSPM can be used almost interchangeably. This does not quite justify its existence. To justify the name: `Aurelia Bundler`, it should in theory understand the Framework and should let user bundle like this:

```shell
 aurelia bundle app/boot dist/bundle.js -im
```
Or in gulp's case:

```javascript 
var bundler = require('aurelia-bundler');

gulp.task('bundle', function(){    
	bundler.bundle({
	  "dist/app-build" : {
		 includes : ['src/app'],
		 options : {
			minify: true,
			rev: true,		   
		 }
	   }
	});
});

```
The Bundler should resolve all the dependencies including ***Aurelia Plugins*** etc. This is ambitious. But, I have been thinking about it for a long time. And I believe I can pull this off.

## How I would proceed

The main job for the bundler is to trace the dependencies correctly and just consternate them together in a meaningful way that the loader can understand.

For the convenience of discussion let's say there are two types of dependencies for a module in an Aurelia application code.

1. Static Dependencies:
2. Dynamic Dependencies:

There is no problem at all for tracing static dependencies as system-builder does this for us, infect it's what we are doing now. 
Dynamic dependencies are the things that can't be statically traced by analyzing `import` statements. For example:

-  `aurelia-router` has a `config` sections that tells the app about the view models and the views and the application resolves them dynamically during runtime.
- There are attributes, custom tags or `<require>` in the view that tells the application some other dependencies that the loader needs to resolve.
 
- There are plugin registrations in the application bootstrapper those yields more dependencies.

These are framework specific things. These are the dependencies that a static analyzer like systemjs-builder or jspm can never trace.  This where Aurelia Bundler should step in and do the job. So, we have to do the following things:

### Trace Dependencies from Views: 

Analyze attributes, custom tags, conventions, databind syntax and trace dependencies from a predefined registry or dictionary. 

### Trace Dependencies from Application Code.

Look for router `config`, decorators etc. With SystemJS’s config  find the views and view models.  

### Trace Dependencies from Plugins.

Look for plugin registrations and recursively trace the plugin as if it's an Aurelia application.


After having a result from Aurelia Specific dynamic trace and a Static trace from the systemjs-builder we combine these two and proceed on bundling.

I would like to take advantage of RegExp and more or less fixed API surface of Aurelia to analyze and trace the dependencies. 