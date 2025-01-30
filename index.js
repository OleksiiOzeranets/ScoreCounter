let number1 = 0;
let number2 = 0;
let home = document.getElementById('firstNumber');
let guest = document.getElementById('secondNumber');
function plus1(){
    number1 +=1;
    home.textContent = number1;
}
function plus2(){
    number1 +=2;
    home.textContent = number1;
}
function plus3(){
    number1 +=3;
    home.textContent = number1;
}
function guestplus1(){
    number2 +=1;
    guest.textContent = number2;
}
function guestplus2(){
    number2 +=2;
    guest.textContent = number2;
}
function guestplus3(){
    number2 +=3;
    guest.textContent = number2;
}

