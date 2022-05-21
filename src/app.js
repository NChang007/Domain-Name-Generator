/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = () => {
  //write your code here
  let randText = document.getElementById("peper");

  function genList() {
    for (let i = 0; i < pronoun.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let v = 0; v < noun.length; v++) {
          console.log(pronoun[i] + adj[a] + noun[v] + ".com");
          // this prints it on the html index----------------------------
          let p = document.createElement("p");
          p.innerHTML = pronoun[i] + adj[a] + noun[v] + ".com";
          randText.appendChild(p);
        }
      }
    }
  }
  genList();
};
