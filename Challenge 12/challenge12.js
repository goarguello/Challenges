let base = prompt('Agregá la base del triángulo:');
let height = prompt('Ahora la altura del triángulo:');
let radio = prompt('Además necesito el radio de un círculo:')
//let pi = Math.PI;

console.log('El área del triángulo es: ', (base*height)/2);
console.log('El área del círculo es: ', Math.PI*Math.pow(radio, 2));