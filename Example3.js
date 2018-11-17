function formOutput() {

var numee1 = document.getElementById("num1").value;
var numee2 = document.getElementById("num2").value;
var numTotal = Number(numee1) + Number(numee2);
document.getElementById("output").innerHTML= numTotal;
}
