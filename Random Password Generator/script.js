let gen = document.getElementById("mybtn");
let pass = document.getElementById("pass");

let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let digit = document.getElementById("digit");
let symbole = document.getElementById("symbole");

const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowers = "abcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const symboles = "!@#$%^&*()-_=+[]{}|;:,.<>?";
let valide = "";

const min = 12;
const max = 20;

gen.onclick = function() {
    let size = Math.floor(Math.random() * (max - min + 1)) + 12; //For dynamic password size, and to be in the strong passwords range
    valide = "";
    if(upper.checked)
        valide += uppers;
    if(lower.checked)
        valide += lowers;
    if(digit.checked)
        valide += digits;
    if(symbole.checked)
        valide += symboles;

    if (valide === "") {
        pass.value = "";
        alert("Please select at least one character type."); //to make sure the user pick at least one checkbox
        return;
    }

    let output = "";
    for(let i = 0 ; i < size ; i++){
        let index = Math.floor(Math.random() * valide.length);
        output += valide[index];
    }
    console.log(output);
    pass.value = output;
}
