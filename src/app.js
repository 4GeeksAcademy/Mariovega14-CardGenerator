/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let numberCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let picas = ["♠", "♥", "♦", "♣"];

  let card = document.querySelector("#root");
  let topCard = document.createElement("div");
  let numCard = document.createElement("div");
  let bottomCard = document.createElement("div");

  card.classList.add("card");
  card.appendChild(topCard);
  topCard.classList.add("topCard");
  card.appendChild(numCard);
  numCard.classList.add("numCard");
  card.appendChild(bottomCard);
  bottomCard.classList.add("bottomCard");

  let randomindex = Math.floor(Math.random() * numberCard.length);
  let randomPicas = Math.floor(Math.random() * picas.length);

  topCard.textContent = picas[randomPicas];
  numCard.textContent = numberCard[randomindex];
  bottomCard.textContent = picas[randomPicas];

  if (topCard.textContent === "♠" || topCard.textContent === "♣") {
    topCard.classList.add("black");
    bottomCard.classList.add("black");
  } else if (topCard.textContent === "♥" || topCard.textContent === "♦") {
    topCard.classList.add("red");
    bottomCard.classList.add("red");
  }
};
