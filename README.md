## Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  
  - [Screenshot](#screenshot)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

### Screenshot

<img src="/design/desktop-design.jpg">
<img src="/design/mobile-design.jpg">

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
- The field is left empty
- The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links
<a href="https://heisemmaco-dev.github.io/newsletter-sign-up-with-success-message-main/">Live Site</a>

### Built with

- Semantic HTML5 markup
- SASS with CSS custom properties
- Flexbox
- javascript

### What I learned

In this project, I've gained knowledge about validating email addresses and performing form validation using JavaScript 

```html
<h1>Some HTML code I'm proud of</h1>
<main>
<section>
<img>

<article>i love using this tage article for my text base structuring<article>

<button>claim</button>
```
what i enjoyed most using SCSS is nesting
```scss
body {
   font-family: 'Roboto';
   background-color: v.$Charcoal-Grey;
   position: relative;

   @include v.media-quire(700px) {
    @include v.center;
    padding: 14px;
    min-height: 100vh;
   }
   
}
```
```js
/* To validate an email */
function valid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLocaleLowerCase());
}
```

### Continued development

I'd like to deepen my understanding of using JavaScript to manipulate the DOM, improving my knowledge of JavaScript syntax for modifying the appearance and functionality of a webpage's frontend. Can you assist me in refining these skills?"

## Author

- Frontend Mentor - [@Moderateemmaco](https://www.frontendmentor.io/profile/Moderateemmaco)
- Twitter - [@heisemmaco-dev](https://www.github.com/heisemmaco-dev)
