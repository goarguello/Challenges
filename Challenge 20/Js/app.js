function pedirDato() {
  let radio = Number(prompt("Por favor, inserte el radio de su circulo: "));

  let canvas = document.getElementById("container");
  var ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.strokeStyle = "Orange"
  ctx.lineWidth = 15
  ctx.arc(350, 350, radio, 0, 2 * Math.PI);
  ctx.stroke();
}
