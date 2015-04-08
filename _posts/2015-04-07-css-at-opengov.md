---
layout: post
title:  "CSS at OpenGov"
changelog: "Improve format of fenced code blocks."
---

Its great to see how prominent teams build web applications deal with CSS.
I can't get enough of [these write-ups](http://css-tricks.com/css/).
Seeing the similarities, new ideas, and ambition thrown out for all to consume is pretty great.
In that spirit, this post takes a close look at how we approach CSS at OpenGov.


It's telling that there aren't articles titled "how we do Javascript at ..." or "how we do Ruby on Rails at ..."
Fortunately, front end and backend developers are working in real languages and frameworks with histories, conventions, and hard limits.
CSS has few of the benefits of a real language and is deceptively simple.
One of the tricks is sticking to your own standards, which aim to *limit* what's possible with CSS.

![Palo Alto's OpenGov site]({{ site.url }}/images/posts/opengov-pa-screenshot.png)

## Where we are and how we got there

OpenGov's transparency product has been around since 2012.
Originally, it was a Rails application built with Zurb's [Foundation](http://foundation.zurb.com/).
Since then, the product has been redesigned 1.5 times, the development stack has been completely overhauled, and our CSS with it.

Today, our applications are built with [ReactJS](http://facebook.github.io/react/) on the front end, which talks to an API managed by Rails.
We've replaced Foundation with our own, custom-build CSS pattern library called **Ovid**, after the [Roman poet](http://en.wikipedia.org/wiki/Ovid).

Ovid is a stand-alone private [NPM](https://www.npmjs.com/) package that is included as a dependency in our applications.
Each application `@import`s Ovid in its own SCSS manifest, which allows the application to extend basic styles and access shared mixins, variables, and functions.

Why'd we build our own pattern library rather than using Bootstrap or sticking with Foundation?
It's mainly about flexibility, efficiency, and control. The common frameworks aim to be all things to all people.
Ovid is purpose built for us, and aims to contain only what we need for our apps.

## Architecture

We use Sass written in the SCSS syntax and compiled with [LibSass](http://libsass.org/).
LibSass finally has enough feature parity with Ruby Sass to be a real option for us, and it compiles super fast.
The last time I evaluated the difference, Ruby Sass compiled in 1.2s with LibSass coming in at 81ms.
Over the course of the day, given the number of times I re-compile, this represents a significant speed boost.

For the moment, we use Node-Bourbon (a LibSass-port of Thoughtbot's [Bourbon](http://bourbon.io/) mixin library) for prefixing.
We've considered moving to [Autoprefixer](https://github.com/postcss/autoprefixer) because it probably will run faster and allow us more flexibility and control over prefixing, but Bourbon's mixins are helpful at consolidating repetitive CSS (my favorite is `@include position(...);`).

There's no grand unifying theory for the directory structure of our SCSS partials.
The manifest file determines the cascade order, so who cares what directory you clump your partials in?
All the same, we aim to make logical groupings of partials in our directory structure, such as `/helpers`, `/forms`, `/navigation`, and `/buttons`.
In general, each partial describes one UI component.

Sass that [doesn't compile](http://robots.thoughtbot.com/separate-rendering-sass-from-non-rendering-sass) (shared variables, functions, mixins, and silent placeholder classes) are grouped together into a `_library` partial.
The 48 other base and components partials are grouped within the `_ovid` partial. In each application using Ovid, these two partials are `@import`ed, preceded by other Sass dependencies (managed with NPM).

Ovid compiles a CSS file of the framework just in case one of the apps consuming it don't use Sass. At the present, our Rails applications import this file via Bower for inclusion in the asset pipeline.

## Naming things

We use a [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)-like syntax for defining HTML class names, and try keep CSS specificity to a minimum by providing a class for all elements.
That said, we're not dogmatic about anything, so you'll find plenty of bare HTML elements nested within class names.

Because Ovid was introduced into an existing SCSS ecosystem, we decided to prefix all Ovid component classes with `ui-`.
While this may break the "u" and "i" keys from over-use, this namespacing helps encapsulate Ovid: components can only inherit styles from an application's stylesheet, never the other way around.

Variable names are abstract and written in camelCase.
For families of variables, we append a number to the base name with `1` being the biggest or darkest. This fits in with the `h1`, `h2`, etc. convention.

```
$colorGray1: #444;
$colorGray2: #737373;
$colorGray3: #909090;
$colorGray4: #ccc;
$colorGray5: #eaeaea;
$colorGray6: #f7f7f7;
```

## Fun facts

* Total rules: **985**
* Total selectors: **1754**
* Average selectors per rule: **1.8**
* File size: **118.28 KB**
* Gzip size: **17.34 KB**
* We roll our own font icon set, called OpenGovIcons (of course). Currently, there are 135 glyphs and are due for a pruning. Several special icons are actually composed of two glyphs with transparent color for a two-toned effect. We use [Fontastic](http://fontastic.me/) to manage OpenGovIcons.
* For a long time we were using `reset.css` to wipe our slate clean. We've recently switched to `normalize.css`, because it gives us a level playing field rather than [blowing the whole thing away](http://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css).
* Reusable ReactJS components are distributed along with the SCSS.


## Living styleguide with KSS

The best thing about developing with Ovid is our living styleguide.
We use [Knyle Style Sheets](http://warpspire.com/kss/) (KSS) to compile a styleguide from formatted comments in Ovid's Sass partials.
For example, we can generate documentation for our button family from the following comment in `_buttons.scss`

```
// Buttons
//
// Use `.ui-button` on any element to create a styled button,
// or use the `<button>` element (with the HTML class).
// For primary actions, use `.ui-button.primary`.
//
// Markup:
// <a class="ui-button {$modifiers}">Click me</a>
//
// :hover             - Hover state
// :active            - Active state
// :disabled          - Disabled
// :focus             - Focus
// .primary           - Primary
// .primary:hover     - Primary hover state
// .primary:active    - Primary active state
// .primary:disabled  - Primary disabled state
// .ghost             - Starts looking like a link, becomes a button on hover
// .small             - Small
//
// Styleguide 6.1

.ui-button {...}
```

We have a `grunt serve` task that watches SCSS files for changes, recompiles the stylesheets, builds the styleguide (with [kss-node](https://github.com/kss-node/kss-node)), and runs a local development server.
Since you can define markup for a component within the SCSS partial, we can create components in isolation without having to spin up our applications locally.

We deploy the [styleguide](http://opengov.github.io/Ovid-styleguide/) via Github pages, because it's just so convenient.

## Build and deployment

Linting is an important part of developing SCSS at OpenGov. We use the wonderful [scss-lint](https://github.com/causes/scss-lint) gem, which allows us to specify our SCSS preferences such as alphabetical ordering of properties, and no nesting beyond 3 levels.
SCSS and JS linting are done together at the command line by simply running `npm run lint`.
(As an aside, it sucks that there isn't a node port of scss-lint. If there were, we could finally get rid of our `Gemfile`)

Most of our other build processes are `grunt` tasks.
We have tasks for local development, building a distribution, and running the test suite on our shared React components.
Thanks to the wonderful [CSSmetrics](https://github.com/phamann/grunt-css-metrics) plugin, we keep an eye on Ovid's selector count (we [support IE8](http://blogs.msdn.com/b/ieinternals/archive/2011/05/14/10164546.aspx)) and compressed size.

## Refactoring

Everyone's a big fan of writing code that is slimmer, more encapsulated within a partial, and understandable.
There's no better feeling than seeing that red number in your PR larger than the green one.
We tend to do pragmatic refactors, ones that correspond to new application features that require substantial new or expanded components from Ovid.
This is great because refactoring can be accounted for within sprint planning estimates.

## That's it

Hopefully this is useful.
If you have questions or comments about anything here, please feel free to Tweet them to me [@andrewliebchen](https://twitter.com/andrewliebchen)!

_*NOTE* I intended to post this in [OpenGov](http://opengov.com)'s engineering blog for it's pending launch. Unfortunately, that launch seems to be permanently pending. Consider this an insider preview..._


