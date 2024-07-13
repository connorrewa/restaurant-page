
import generateBody from './generateBody.js';
import handleNavClick from './handleNavClick.js';
import generateAbout from './generateAbout.js';
import generateHome from './generateHome.js';
import generateMenu from './generateMenu.js';

console.log("Hello there");
generateHome();


let homeButton = document.querySelector('#home');
let menuButton = document.querySelector('#menu');
let aboutButton = document.querySelector('#about');

homeButton.addEventListener("click", (e) => {
    handleNavClick(e.target);
    generateHome();
});
menuButton.addEventListener("click", (e) => {
    handleNavClick(e.target);
    generateMenu();
});
aboutButton.addEventListener("click", (e) => {
    handleNavClick(e.target);
    generateAbout();
});
