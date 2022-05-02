let userInput;
let computerInput;
let pregunta = "si";

// piedra -> 0
// papel -> 1
// tijera -> 2

while (pregunta == "si") {
  userInput = prompt("¿Piedra, papel o tijera?").toLowerCase();
  computerInput = Math.round(Math.random() * 2);
  // Si elegiste piedra:
  if (userInput == "piedra" && computerInput == 0) {
    console.log("EMPATE");
  } else if (userInput == "piedra" && computerInput == 1) {
    console.log("PERDISTE");
  } else if (userInput == "piedra" && computerInput == 2) {
    console.log("GANASTE");
  }

  // Si elegiste papel:
  if (userInput == "papel" && computerInput == 0) {
    console.log("GANASTE");
  } else if (userInput == "papel" && computerInput == 1) {
    console.log("EMPATE");
  } else if (userInput == "papel" && computerInput == 2) {
    console.log("PERDISTE");
  }

  // Si elegiste tijera:
  if (userInput == "tijera" && computerInput == 0) {
    console.log("PERDISTE");
  } else if (userInput == "tijera" && computerInput == 1) {
    console.log("GANASTE");
  } else if (userInput == "tijera" && computerInput == 2) {
    console.log("EMPATE");
  }

  console.log("Elegiste: " + userInput);
  console.log(("La computadora eligio: "+ computerInput + ", recorda que:\n 0: Es piedra \n 1: Es papel \n 2: Es tijera"));
  pregunta = prompt("¿Quieres seguir jugando?").toLowerCase();
}
