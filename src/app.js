/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronom = ["the", "our"];
  let adj = ["great", "big"];
  let nombre = ["jogger", "racoon"];

  pronom.forEach(pronom => {
    adj.forEach(adj => {
      nombre.forEach(nombre => console.log(pronom + adj + nombre));
    });
  });
};
