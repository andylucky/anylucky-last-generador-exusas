/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /* eslint-disable */

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let newArray = [who, action, what, when];

  //write your code here

  let generadorExcusas = elArray => {
    debugger;
    let str = "";
    for (let i = 0; i < elArray.length; i++) {
      let numeroArray = elArray[i].length;
      const numAleat = Math.floor(Math.random() * numeroArray);
      str += `${elArray[i][numAleat]} `;
    }
    return str;
  };

  let parrafoMain = document.getElementById("excuse");
  let newParrafo = document.createElement("p");
  newParrafo.innerHTML = `${generadorExcusas(newArray)}`;
  parrafoMain.appendChild(newParrafo);
  let buton = document.getElementsByTagName("button")[0];

  buton.addEventListener("click", function() {
    // Recargar la página
    location.reload();
  });
};
