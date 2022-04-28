let dni = prompt("Inserte su dni por favor.");

if (
  (0000000 != dni && dni <= 9999999 && dni.length == 7) ||
  (00000000 != dni && dni <= 99999999 && dni.length == 8)
) {
  alert("Su DNI es: " + dni);
} else {
  alert("Su DNI no es válido.");
}
