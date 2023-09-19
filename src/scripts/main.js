const chars = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
const body = document.querySelector(".page");
const bl = document.querySelector(".bl");

body.style.backgroundColor = "#000";

const randomString = () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const charWidth = 12;
  const charHeight = 20;

  const columns = Math.floor(windowWidth / charWidth);
  const rows = Math.floor(windowHeight / charHeight);

  const totalChars = columns * rows;

  const randomChars = Array.from({ length: totalChars }, () => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  });

  const rowsArray = Array.from({ length: rows }, (value, index) => {
    const startIndex = index * columns;
    const endIndex = startIndex + columns;
    return randomChars.slice(startIndex, endIndex).join("");
  });

  const randomString = rowsArray.join("\n");

  bl.innerText = randomString;
}

setInterval(() => {
  randomString();
}, 1e2);
