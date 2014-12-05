---
layout: post
title:  "As little as possible"
changelog: "Add Sass, install Bourbon and Neat via Bower, and use Grunt to manage Jekyll and asset compilation. Enforce a strong baseline grid, and set up a column grid."
---
Beginnings are the hardest. The blank page gapes back at you. As a relative measure, your first mark changes the page 100% &mdash; the page goes from clean to marked. Fortunately, every mark after that first one is changes the page less and less, and therefore become easier and easier.

Why does every mark after the first get easier to make? In part, I think its because the work begins to take on logic of its own, and each new mark becomes one of a part of all the other marks and all future marks.

Marks are the physical culmination of decisions made by the designer. The trick about beginnings is to start making sensible decisions about rules. Rules are invisible marks that make decision-making easier, even inevitable. Rules can literally be rules and grids (like you see in red on this page), or they can be softer like defining the problem the design will solve.

So far, I've got a few soft rules:

### Improved defaults
Out of the box, browsers apply some default styling to `html` content. Links are blue and underlined, lists are indented, etc. Using minimal design moves, I'm tweaking those defaults for a better experience on the page. For example, you'll notice that links have a more subtle underline style (thanks to a technique [shared](http://codepen.io/anon/pen/fcJFg) by the designers at [Medium](http://www.medium.com)), and are uncolored so as not to interrupt the reading experience too much.

> 10. Good design is as little design as possible. [Dieter Rams](https://www.vitsoe.com/us/about/good-design)


### Grid
Grids in graphic design are [old](http://www.nps.gov/history/history/online_books/brochures/unigrid/); grids in architecture are even [older](http://www.architectural-review.com/essays/1947-march-the-mathematics-of-the-ideal-villa-palladio-and-le-corbusier-compared-by-colin-rowe/8604100.article). Grids as a way to order a design are relatively new to web design.

Baseline grids help determine how vertical elements align. The baseline grid for this site is demarcated by faint, red horizontal lines. Each grid line is two times the height of the base font size (or `2em`). We've got a nice, strong vertical rythmn by using the baseline measure for all vertical elements, from the `line-height` between text to the `margin` between paragraphs.

Column girds help determine how horizontal elements align. You'll notice there are 12 columns, demarcated by the faint, red solid columns. I could write a whole post about how much I love base-twelve for design: but let's just say for now it's a convenient number because you can easily divide the page into thirds (four columns), quarters (three columns), and halves (six columns). Try to do that with ten columns...

