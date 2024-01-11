const resultElement = document.getElementById("cards-box");

for (let i = 1; i <= 100; i++) {
  let result = "";
  let colorClass = "";
  if (i % 15 == 0) {
    console.log("FizzBuzz");
    result = "FizzBuzz";
    colorClass = "cards-fizzbuzz";
  } else if (i % 5 == 0) {
    console.log("Buzz");
    result = "Buzz";
    colorClass = "cards-buzz";
  } else if (i % 3 == 0) {
    console.log("Fizz");
    result = "Fizz";
    colorClass = "cards-fizz";
  } else {
    console.log(i);
    result = i;
    colorClass = "cards-base";
  }

  const cardsElement = `<div class="cards p-3 m-3 ${colorClass}">${result}</div>`;
  resultElement.innerHTML += cardsElement;
}
