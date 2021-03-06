function growingWord() {

  let text = document.querySelector("#exercise > p");
  let currentSize = text.style.fontSize;
  let currentColor = text.style.color;

  if (currentSize === '') {
    currentSize = 2;
  }
  else {
    newSize = currentSize.match(/\d+/);
    currentSize = Number(newSize) * 2;
  }
  
  text.style.fontSize = currentSize + "px";

  switch (currentColor) {
    case "": text.style.color = "blue"; break;
    case "blue": text.style.color = "green"; break;
    case "green": text.style.color = "red"; break;
    case "red": text.style.color = "blue"; break;
  }
}