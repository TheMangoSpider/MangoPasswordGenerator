var size = Math.random() * (20 - 15) + 15;
var myVariable = "";
const password = [];
for (let i = 0; i < size; i++) {
    var char = Math.random() * (90 - 32) + 32;
    myVariable += String.fromCharCode(char);
}
document.getElementById('myVariable').textContent = myVariable;