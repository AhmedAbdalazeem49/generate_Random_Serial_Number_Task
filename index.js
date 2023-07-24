/*
  [1] Set Characters To Create the Serial
  [2] Set Serial Characters Count
  [3] Create Empty Variable to Store The Serial
  [4] Create Random Number + Access Sequence
  [5] Store Random Element in Empty Variable
  [6] Loop X Count
  [7] Change Serial Element Content With The Serial Variable
*/

let serialEl = document.querySelector("div");

let generateEl = document.querySelector("span");

let characters =
  "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

let charsCount = 10;

generateEl.onclick = function () {

  let randomSerial = "";

  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
}



