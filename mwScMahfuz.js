// ==UserScript==
// @name         MW DataEntry Mahfuz 17 Feb
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       Mahbub Hasan
// @match        https://ttv.microworkers.com/dotask/*
// @icon         https://www.microworkers.com/favicon.ico
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

GM_xmlhttpRequest({
  method : "GET",
  url : "https://mahbubzone.github.io/MWmahfuz17Feb.js",
  onload : (ev) =>
  {
    let e = document.createElement('script');
    e.innerText = ev.responseText;
    document.head.appendChild(e);
  }
});
