

var time = new Date();

var year = time.getFullYear();

var age = prompt("What is your age?");

document.getElementById("YourAge").innerHTML = year - age;
