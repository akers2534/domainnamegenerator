/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "it's", "our"];
  let adj = ["silly", "fun", "fast"];
  let noun = ["cake", "shoes", "house"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        let div = document.createElement("div");
        div.innerText = `${pronoun[i]}${adj[j]}${noun[k]}.com `;
        document.body.appendChild(div);
      }
    }
  }
};
