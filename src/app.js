/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".net", ".me", ".rip"];

window.onload = () => {
  //write your code here
  let randText = document.getElementById("pepers");
  function genSentence() {
    let pronounRan = Math.floor(Math.random() * pronoun.length);
    let adjRan = Math.floor(Math.random() * adj.length);
    let nounRan = Math.floor(Math.random() * noun.length);
    let domRan = Math.floor(Math.random() * dom.length);

    randText.innerHTML =
      pronoun[pronounRan] + adj[adjRan] + noun[nounRan] + dom[domRan];
  }
  genSentence();
  let newButton = document.getElementById("refreshButton");
  newButton.onclick = function() {
    genSentence();
  };
  console.log("Hello Rigo from the console!");
};
