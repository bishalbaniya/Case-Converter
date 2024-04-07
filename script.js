let text = document.querySelector(".text");
let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower");
let camel = document.querySelector("#camel");
let pascal = document.querySelector("#pascal");
let snake = document.querySelector("#snake");
let kebab = document.querySelector("#kebab");

text.addEventListener("input", () => {
  // console.log(text.value);

  upper.textContent = text.value.toUpperCase();
  lower.textContent = text.value.toLowerCase();
  camel.textContent = toCamel(text.value);
  pascal.textContent = toPascal(text.value);
  snake.textContent = toSnake(text.value);
  kebab.textContent = toKebab(text.value);

  function toCamel(content) {
    content = content.toLowerCase();
    //merge the value of test wrt " " and make a array of each word
    let value = content.split(" ");
    //word will access each word from value and i is index
    const camArr = value.map((word, i) => {
      if (i == 0) return word;
      //
      else return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camArr.join("");
  }

  function toPascal(content) {
    content = content.toLowerCase();
    let value = content.split(" ");
    const camArr = value.map((word, i) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return camArr.join("");
  }

  function toSnake(content) {
    content = content.toLowerCase();
    let value = content.split(" ");
    return value.join("_");
  }

  function toKebab(content) {
    content = content.toLowerCase();
    let value = content.split(" ");
    return value.join("-");
  }
});
