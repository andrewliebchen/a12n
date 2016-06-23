---
layout: post
title:  "New side projects"
---

I've wrapped up a pair of side projects over Thanksgiving. The first is Reacticons, a small file icon set for [ReactJS](http://facebook.github.io/react/) that uses `SVG`s to render resolution-independent vector icons. They're pretty cute.

![Reacticons landing page]({{ site.url }}/images/posts/reacticons-1.png)

ReactJS is a front-end templating framework developed for Facebook, and it's great. It combines behavior (`JS`) and structure (markup) into one file, allows you to create reusable and stateful components, and does it all with an HTML like `JS` syntax called `JSX`. As a designer, I love it because it is pretty easy grokk, but I'll probably write more about that in a later post.

![Reacticons UI harness]({{ site.url }}/images/posts/reacticons-2.png)

**[Reacticons](http://andrewliebchen.github.io/reacticons/)** come in five flavors, and I've exposed some of their properties for configuration via component props. For instance, you can change the background color, the foreground color, the file label, and whether or not the icon is animated. For the landing page, I created a simple [UI harness](https://www.meteor.com/blog/2014/08/18/meteor-devshop-sf-july-2014) to demonstrate just how configurable Reacticons are. You can even toggle between the visual example and the `JSX`. Building little components like this are pretty trivial in React.

The other project, **[Box-sciagraphy](http://andrewliebchen.github.io/box-sciagraphy/)**, is a jQuery plugin that generates "long" CSS `box-shadows` on an element based on timestamp, latitude, and longitude parameters attached to an element. Kind of useless, but fun nonetheless.

![Box-sciagraphy landing page]({{ site.url }}/images/posts/box-sciagraphy.png)

Box-sciagraphy was inspired by [FourShadows.js](https://github.com/Gigacore/four-shadows), a plugin that uses sprites to render long shadows, which was _itself_ by [Google Map's rendering](http://littlebigdetails.com/post/102531877124/google-maps-building-shadows-display-accurately) of shadows. I take umbrage with Google Map's shadow rendering...surely they know that the sun doesn't cast a 360&deg; shadow over the course of a day?

Anyway, simmering rage gave way to creative production. With some help from another [JS library](https://github.com/mourner/suncalc) to do the heavy lifting to calculate azimuth and altitude given a UNIX timestamp and location coordinates, I tied them together with a modified [Sass mixin](https://github.com/at-import/sassytextshadow) to draw the `box-shadow`s, and packaged it all together into a plugin. And built a landing page.

As far as I can tell, neither project has gotten much attention or use. That's okay: I got to scratch an itch while stretching my ability a little further than normal. Maybe Google will take notice and render accurate shadows.

You can use either project however you want. Check out the repos on Github ([here](http://www.github.com/andrewliebchen/reacticons) and [here](http://www.github.com/andrewliebchen/box-sciagraphy)) for installation and usage instructions.





