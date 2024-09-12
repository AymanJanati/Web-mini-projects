let input = document.getElementById("input");
let result = document.getElementById("result");

function roll(){
    for(let i=1 ; i<=5 ; i++){
        document.getElementById(`${i}`).src = "";  //to reset the src for the pictures, without that if we went from higher to lower number, some pictures will keep the result from the previous attemp
    }

    let total = 0;
    let count = Number(input.value);

    if(count > 5){
        result.textContent = "Max dices per time is 5."
        return 1;}
    for(let i = 1 ; i <= count ; i++){
        let index = Math.random() * (6 - 1 + 1);
        index = Math.floor(index) + 1;
        total += index;
        document.getElementById(`${i}`).src = `dices/${index}.png`;
    }
    result.textContent = `You rolled ${count} dices with total value of ${total}.`;
}