const resultElement = document.getElementById("cards-box");

for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 15 == 0) {
    console.log("FizzBuzz");
    result = "FizzBuzz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    result = "Buzz";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    result = "Fizz";
  } else {
    console.log(i);
    result = i;
  }

  const cardsElement = `<div class="cards p-3 m-3">${result}</div>`;
  resultElement.innerHTML += cardsElement;
}
