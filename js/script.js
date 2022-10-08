'use strict';

console.log("я здесь");

var password = "1431588";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert('Wrong password');
        return false;
    }


    if(document.getElementById('pass1').value == password) {
        alert('Correct password');
    }
}


