import {html, render} from 'lit-html';

let sayHello = (name) => html`<h1>Hello ${name}</h1>`;

// It's rendered with the `render()` function:
render(sayHello('World'), document.getElementById("privacyPolicy"));