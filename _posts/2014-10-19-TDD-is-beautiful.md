---
layout: post
title:  "TDD is beautiful"
changelog: "Improve the Gruntfile, remove development markings, and redesign the header."
---
Test-driven development (TDD) is a beautiful idea. [TDD](http://en.wikipedia.org/wiki/Test-driven_development) is a software development practice in which simple tests that represent desired functionality are written first, then software is developed to fulfill those tests. The tests are automated and serve as a quality assurance as the focus of the development team moves on to other features.

I love the idea of TDD because its a way for developers to set up constraints in the otherwise wide-open field confronting a developer when she starts building software. The design process kind of works this way: at the beginning of a design process we stare down infinite possibilities. Then we use an iterative process to define constraints to narrow scope and scale of the problem until a physical solution manifests.

Although these processes have similar goals, designers miss out on the _tooling_ that comes with TDD: we have no way to write concise statements that distill larger requirements that can pass or fail. We try to encode this benefit into our process, and must continually evaluate our work to ensure that it is meeting fundamental principals.

Maybe there's something in [behavior-driven development](http://en.wikipedia.org/wiki/Behavior-driven_development). BDD is a subset (or related) to TDD, but is intended to open up the process by including non-technical stakeholders. User stories might get written in an language equally useful and approachable (such as [Cucumber](http://cukes.info/)), against with more detailed tests are written. The user story thus defines the acceptance criteria for the software.

Already BDD tests could to run against the UI layer (via [PhantomJS](http://phantomjs.org/) or [Capybara-webkit](https://github.com/thoughtbot/capybara-webkit)), so why should designers be working against tests when they design interfaces? At [FDN](http://gofdn.com), we used Cucumber but scenarios were written _after_ designs were finalized. In my [current gig](http://opengov.com), I'm not sure we use a BBD framework at all.

Designers not get to work within the "red-green-refactor" cycle developers enjoy, but maybe there's something in TDD/BDD to apply to design processes more generally.
