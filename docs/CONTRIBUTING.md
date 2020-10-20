# Contributing 😎

> This document is a homebase for all contributors.

## Development 👨‍💻

This project is built using [Gatsby](https://www.gatsbyjs.com/), which is a JavaScript framework (built on top of [React](https://reactjs.org/)) for creating cool websites.
The project also utilizes [SCSS](https://sass-lang.com/documentation/syntax#scss) for styling the various page elements.

### Types of Files 📁

Do not be discouraged/intimidated by any files that have unfamiliar file extensions.
Mainly, there are two types of files to work with in this project:

`.tsx`: These files allow you to write HTML elements in TypeScript.
They are used to represent components and pages in Gatsby.

`.scss`: These files allow you to refer to the HTML in the `.tsx` files and style them using a superset of CSS.

### Getting Started 🏁

To get started with developing, [fork](https://github.com/TuffyHacks/TuffyHacks-2021/fork) this repository and open it in your development environment of choice.
Check out [_An Introduction to Open Source_](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source) to learn how to contribute in a helpful way.

Once situated, just run `npm i` at the root of the project and then run `npm run dev` to spin up the development server.
You will know if the development server is up-and-running correctly when you visit your [localhost](http://localhost:8000/) at port 8000.
Now that the development server is up-and-running, you can make changes to the source code and the development server will hot-reload and immediately show your changes on [localhost](http://localhost:8000/) at port 8000.

Once you are done making your changes, update the [todo](#todo-) by marking off your task and [create a pull request](https://github.com/TuffyHacks/TuffyHacks-2021/compare) to the repository.
Thank you for taking your time to contribute to TuffyHacks.
All contributions are appreciated! 😊

> 💡 Remember to refer to the [list of references](#reference-) in case you are looking for anything in particular.

## Todo ✅

- [ ] Style the main sections...
  - [ ] Create CSS grid layout and positioning for landing section.
  - [ ] Create CSS grid layout and positioning for about section.
  - [ ] Create CSS grid layout and positioning for sponsors section.
  - [ ] Create CSS grid layout and positioning for FAQ section.
  - [ ] Create CSS grid layout and positioning for Get-Updates section.
  - [ ] Create CSS button styling for `cta` (Call to Action) class.
  - [ ] Create CSS effect where the line in the social component gets longer the further the scroll.
- [ ] Branding in General...
  - [ ] Create an SVG design for a TuffyHacks logo.
  - [ ] Create a favicon of the TuffyHacks logo.
- [ ] Documenting...
  - [ ] Write up a mission statement in the [README](../README.md).
  - [ ] Write up a summary of what techniques were used to create this digital platform.
  - [ ] Write up a summary of how Mailchimp is integrated in this site.
  - [ ] Feel free to add some [references](#reference-) (at the bottom of this document).
- [x] Miscellaneous Tasks...
  - [x] Build [GetUpdates](../src/components/GetUpdates.tsx) component. (Ethan)
  - [x] Style the [aside](src/components/Social.tsx). (Ethan)
  - [x] Create HTML markup.
  - [x] Style the header.

## Design Spec 💅

All of the sections on the homepage approximately take up one screen and are each styled with a [CSS grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) technique.
Consider using [Layoutit](https://grid.layoutit.com/) to help create correct grid CSS.

## Reference 📚

- [Figma Mockup](https://www.figma.com/file/54GhVqKMnaifOzbEIkGPdC/TuffyHacks-Design?node-id=0%3A1): The site's target layout.
- [_Learn CSS Grid_](https://learncssgrid.com/): Info about how to implement CSS grid.
- [Layoutit](https://grid.layoutit.com/): CSS grid utility.
- [_An Introduction to Open Source_](https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source)
- [Gatsby Tutorials](https://www.gatsbyjs.com/tutorial/)
- [SCSS Overview](https://sass-lang.com/documentation/syntax#scss)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)

---

Built with 💖 by the [TuffyHacks Team](https://github.com/TuffyHacks)
