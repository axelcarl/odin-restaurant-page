import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
import titleListener from "./titleEventListener";
import './stylesheet.css';

let homepage = document.createElement('div');
let menu = document.createElement('div');
let contact = document.createElement('div');

homepage.classList.add('home')
menu.classList.add('menu')
contact.classList.add('contact')

menu.style.display = 'none';
contact.style.display = 'none';

document.querySelector('#content').appendChild(homepage);
document.querySelector('#content').appendChild(menu);
document.querySelector('#content').appendChild(contact);

createHome();
createMenu();
createContact();
titleListener();



