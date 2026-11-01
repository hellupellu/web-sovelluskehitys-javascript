'use strict';

const target = document.querySelector('#target');
const browser = navigator.userAgent;
const screenwidth = screen.width;
const screenheight = screen.height;
const availablewidth = screen.availWidth;
const availableheight = screen.availHeight;
const now = new Date();
const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

target.innerHTML = `<p>Browser: ${browser}</p>
<p>Screen size: ${screenwidth} x ${screenheight}</p>
<p>Available screen space: ${availablewidth} x ${availableheight}</p>
<p>Date: ${date}</p>
<p>Time: ${time}</p>`;
