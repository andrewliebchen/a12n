---
layout: post
title:  "The Farnsworth House"
changelog: "Install Grunt, set up automated screenshots, add additional post styling"
---

It sounds hyperbolic, but the design and development of a web property is a craft. Using craft to describe how one makes anything has been devalued to the point of meaninglessness by overly precious marketing copy, to the point that when I read the phrase "Hand-crafted website," I hear ukulele music in my head.

So, how is web design and development a craft? Almost everything on the web is bespoke. Sure, there's automation, frameworks, UI kits, and great tools, but your grandpa in his workshop also has power tools, jigs, and Home Depot, yet you wouldn't _dare_ say that trivet he made for your birthday _isn't_ handcrafted.  Would you?

That "handcrafting" websites is a thing at all is because the medium of the internet obscures the hand of its creator. Hard-working web designers and developers have to practically stand on their aeron chairs and shout, "it looks like just a bunch of boxes, but someone had to actuallty \*write\* those nice gradients into all those buttons!"

![Farnsworth House](http://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Farnsworth_House_2006.jpg/1024px-Farnsworth_House_2006.jpg)

Architecture has been through its machine aesthetic phase. There's a great short section in Michael Cadwell's [essay](http://arch5541.files.wordpress.com/2011/08/caldwell-flooded-at-the-farnsworth-house.pdf) of [Mies Van Der Rohe's](http://en.wikipedia.org/wiki/Mies_van_der_Rohe) [Farnsworth House](http://en.wikipedia.org/wiki/Farnsworth_House), the first (and better) of Modern architecture's glass houses. The house is not much more than bold steel structure. There are only two methods for joining structural steel together: with bolts or by welding. To Mies, both methods expressed the act of assembly: the bolts remind you of the worker who tightened them, while welding reminds you of the highly skilled tradesworker melted the steel together on site. When you visit the Farnsworth House, there aren't any welds or bolts to see.

Mies opted for a time-consuming process called _plug welding_ to join the pieces of the Farnsworth House's frame. Caldwell explains it best:

> Plug welding is an elaborate process: steel erectors first drilll the columns with erector seats; they then place the perimeter beam on these seats, shim the beam level, and clamp it secure; next, welders plug the vacant column holes, fusing the column to the beam; and finally, finishers remove the erection seats and sand all surfaces smooth.

Got that? Holes are drilled in the column, the beam is clamped to the column, the welder fills the holes with molten steel, fusing the column and beam, then the welds are smoothed. Plug welding is a process that erases itself.

![Plug welding on Farnsworth House]({{ site.url }}/images/posts/farnsworth-house-1.png)

> Curiously, these connections require a sequence of operations that demand a high degree of craft, yet each operation disappears with the next. The mechanical craft of the seated connection disappears with the industrial craft of welding, the industrial craft of welding disappears with the handcraft of sanding, and the handcraft of sanding disappears with its own operation. There is no glorification of the technology in this curious sequence, just as there is no remnant of craft.

> The Farnsworth House does not glorify the industrial process of steel production and fabrication; it erases it.

Making a website is similar. The machine demands perfection so the act of creation means erasing all traces of the creation. This website is different. This website is all about its own creation.

What's the practical implication for this project? I've set up a [Grunt](http://www.gruntjs.com) [task](https://www.npmjs.org/package/grunt-localscreenshots) that will take a screenshot of this site's homepage with each deployment. For now, there's not enough development history to make the images interesting. _Eventually_ though, we'll have an awesome [project archive](https://github.com/andrewliebchen/a12n/tree/master/images/screenshots).
