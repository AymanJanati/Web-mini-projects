const dcr = document.getElementById("b3");
const rst = document.getElementById("b2");
const inc = document.getElementById("b1");
let counter=0;
inc.onclick = function(){
    counter++;
    document.getElementById("mytxt").textContent = counter;
}
dcr.onclick = function(){
    counter--;
    document.getElementById("mytxt").textContent = counter;
}
rst.onclick = function(){
    counter = 0;
    document.getElementById("mytxt").textContent = counter;
}