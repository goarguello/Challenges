let numbers = [];
let addNumber = "";
let numbersArray = "";

while ((addNumber != undefined) == true) {
  addNumber = prompt("Inserta un número: ");
  if (isNaN(addNumber)) {
    alert("Ni letras, ni espacios, solo números.");
  } else {
    numbers.push(addNumber);
  }
}

numbersArray = numbers.join("");

console.log(numbersArray);