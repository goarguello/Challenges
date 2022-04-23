let number1 = prompt('Inserte un número: ');
let number2 = prompt('Inserte otro número');

if(number1 > number2){
    console.log('El número uno es mayor al número dos');
}else{
    if(number1 === number2){
        console.log('El número uno es igual al número dos');
    }else{
        console.log('El número uno es menor al número dos');
    }
}