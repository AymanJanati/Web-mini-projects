const input = document.getElementById("input");
const output =  document.getElementById("output");
const btn = document.getElementById("mybtn");

btn.onclick = function() {
    let num = 0;
    let tmp = input.value;
    let res;

    tmp = Number(tmp);
    if(isNaN(tmp)){
        output.textContent = "Please enter a valide number, no characters.";
        return;
    }

    while(tmp != 0){
        num++;
        tmp /= 10;
    }

    const limit = Math.pow(10,num);
    for(let i = 0 ; i < limit ; i++){
        if(input.value == i){
            res = i;
        break;
    }}
    output.textContent = `Result is >> ${res}`;
}