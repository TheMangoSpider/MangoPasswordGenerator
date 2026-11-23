var size = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
var myVariable = "";
const password = [];
for (let i = 0; i < size; i++) {
    var char = Math.floor(Math.random() * 90) + 33;
    myVariable += String.fromCharCode(char);
}
document.getElementById('myVariable').textContent = myVariable;