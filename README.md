# The Donut Shoppe MVP (WIP)

This is a work-in-progress prototype for a dessert shop's landing page. (3 hour time limit) Future prototype iterations include adding more pages with react-router, and showcasing other functionalities such as add to cart/basket page, category pages, about page, and contact page. Everything on this page, including graphics, code, notes, and comments are created by myself.

## How to Run

**Prerequisites:** node, npm

To run the app, clone this repo and run:

`npm install && npm run start`

A lot of sections are unfinished, as I tried to encapsulate my abilities for a large range of concepts such as:
- Component Architecture
- Data Manipulation
- State Management
- Typography / Color Theory
- Responsive Design
- Branding / Marketing
- Graphic Design
- Learning new libs/packages quickly 

Technologies used include:
- React.js
- Material UI

## Prototyping Process

1. **Identify Problem:** So since I was making something from scratch I actually just chose something I knew would be fun to do, hehe. But for realsies, my brainstorming usually involves data analysis, some type of user research, industry research, and sometimes usability testing. 

2. **Design a Solution:** How can we fix the issue? For this, I wanted to make something that was intuitive, aesthetic yet simple, appealing to my audience, and essentially finding different ways to keep users on the app longer. Branding is my favorite part so I took some time to do some quick mock-ups and make some basic reusable components, such as a product card.

![Donut Shoppe Design](https://github.com/egoroza/the-donut-shoppe-mvp/blob/main/src/design-mock-up.png "Donut Shoppe Mock")

3. **Develop Solution:** This also includes choosing technlogies, environment setup, and all the works that come with the development process. Additionally, researching packages and learning how to use them (I found and used [Flickity](https://flickity.metafizzy.co/) for the carousel hero) is also a part of this process. Making note of any architecture and how to divide my components, what can be reusable, what needs state management, etc. (but okay yes sometimes I totally just skip to this step and go crazy)

## Other Follow-Ups

There is a lot of work still left for this prototype until it's considered a viable MVP in my opinion. But given the time limit, I wanted to emphasize my thought process and ideas rather than trying to create a "finished" product. Some of the most important things to touch on:

**Mobile view** I know that I call myself a "mobile-first" designer... but that doesn't mean I always do the mobile view first lol. I find the desktop more fun to design and it helps me visualize the layout, particularly in terms of how they'll lay in a flexbox container. Then I have time to think about which information should be emphasized and included in the mobile view, and how and if we want to change the way that data is displayed.

**Checking a11y compliance** Aria labels, alt text on images, looking into converting the hero banner to image + text instead of just an image, there is much to be done! 

**Design tokens** Would create design tokens take advantage of material UI's built-in theme context instead of using `var(--primary-color)` and manually overriding material UI CSS

**Better component breakdown** in terms of code quality there's a lot that can be cleaned up - reusable constants, components, etc. 

**Add a server/API with GQL + Apollo** I mean I don't technically need this for MVPs but it's nice to practice this every once in awhile!

There's obviously lots that can be done but this is what it is for now :)

-e
