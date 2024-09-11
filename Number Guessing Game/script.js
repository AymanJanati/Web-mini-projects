let min = 1;
let max = 100;
let winner = Math.floor(Math.random() * (max - min + 1));
let mybtn = document.getElementById("mybtn");
let result = document.getElementById("result");
let mytxt = document.getElementById("mytxt");
let attemps = 6;
let lose = false;
let att = document.getElementById("att");

console.log(winner);
mybtn.onclick = function() {
    attemps--;
    att.textContent = `${attemps} attemps left.`
    let gss = mytxt.value;
    if(gss == winner){
        result.textContent = `We Have a winner! The winning number was ${winner} all the time. refresh the page to replay`;
    }
    else if(gss > winner){
        result.textContent = `Too big.`;
    }
    else {
        result.textContent = `Too small.`;
    }
    if(attemps == 0 && winner != gss){
        result.textContent = "Too bad you lost! refresh to try again."
        mybtn.disabled = true;
    }
}