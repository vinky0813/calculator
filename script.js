const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const clear = document.getElementById("clear");
const operate = document.getElementById("operate");

const display = document.querySelector(".operation");
const answer = document.querySelector(".result");


let operation = "";
let first = "";
let second = "";
let reset = false;

clear.addEventListener("click", function() {
    operation = "";
    display.innerHTML = "";
    answer.innerHTML = "";
    first = "";
    second = "";
    reset = false;
});

one.addEventListener("click", function() {
    if (operation == "") {
        first+="1";
    }
    else {
        second+="1";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "1";
    }
});

two.addEventListener("click", function() {
    if (operation == "") {
        first+="2";
    }
    else {
        second+="2";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "2";
    }
});

three.addEventListener("click", function() {
    if (operation == "") {
        first+="3";
    }
    else {
        second+="3";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "3";
    }
});

four.addEventListener("click", function() {
    if (operation == "") {
        first+="4";
    }
    else {
        second+="4";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "4";
    }
});

five.addEventListener("click", function() {
    if (operation == "") {
        first+="5";
    }
    else {
        second+="5";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "5";
    }
});

six.addEventListener("click", function() {
    if (operation == "") {
        first+="6";
    }
    else {
        second+="6";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "6";
    }
});

seven.addEventListener("click", function() {
    if (operation == "") {
        first+="7";
    }
    else {
        second+="7";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "7";
    }
});

eight.addEventListener("click", function() {
    if (operation == "") {
        first+="8";
    }
    else {
        second+="8";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "8";
    }
});

nine.addEventListener("click", function() {
    if (operation == "") {
        first+="9";
    }
    else {
        second+="9";
    }
    if (reset == true){
        display.innerHTML = first.toString() + " " + operation + " " + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "9";
    }
});

zero.addEventListener("click", function() {
    if (operation == "") {
        first+="0";
    }
    else {
        second+="0";
    }
    if (reset == true){
        display.innerHTML = first.toString() +  " " + operation + " "  + second.toString();
        answer.innerHTML="";
        reset = false;
    }
    else {
        display.innerHTML += "0";
    }
});

function calculate(a, b, o) {
    if (o == "+") {
        return add(a,b);
    }
    else if (o == "-") {
        return sub(a,b);
    }
    else if (o == "*") {
        return mul(a,b);
    }
    else if (o == "/") {
        return divi(a,b);
    }
}

addition.addEventListener("click", function() {
    if (first == ""){
        first ="0";
        operation = "+";
        display.innerHTML="0 + ";
    }
    else if (second=="" && operation =="" && first.length !=0) {
        operation = "+";
        display.innerHTML += " + ";
    }
    else if (second=="" && (operation=="-"||operation=="*"||operation=="/") && first.length!=0){
        operation = "+";
        display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-3);
        display.innerHTML += " + ";
    }
    else if (second.length != 0 && operation.length != 0 && first.length != 0) {
        display.innerHTML += " = ";
        answer.innerHTML = (calculate(first,second,operation).toString());
        first = calculate(first,second,operation);
        second = "";
        operation = "+";
        reset = true;
    }

});

subtraction.addEventListener("click", function() {
    if (first == ""){
        first ="0";
        operation = "-";
        display.innerHTML="0 - ";
    }
    else if (second=="" && operation =="" && first.length !=0) {
        operation = "-";
        display.innerHTML += " - ";
    }
    else if (second=="" && (operation=="+"||operation=="*"||operation=="/") && first.length!=0){
        operation = "-";
        display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-3);
        display.innerHTML += " - ";
    }
    else if (second.length != 0 && operation.length != 0 && first.length != 0) {
        display.innerHTML += " = ";
        answer.innerHTML = (calculate(first,second,operation).toString());
        first = calculate(first,second,operation);
        second = "";
        operation = "-";
        reset = true;
    }
});

multiplication.addEventListener("click", function() {
    if (first == ""){
        first ="0";
        operation = "*";
        display.innerHTML="0 * ";
    }
    else if (second=="" && operation =="" && first.length !=0) {
        operation = "*";
        display.innerHTML += " * ";
    }
    else if (second=="" && (operation=="+"||operation=="-"||operation=="/") && first.length!=0){
        operation = "*";
        display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-3);
        display.innerHTML += " * ";
    }
    else if (second.length != 0 && operation.length != 0 && first.length != 0) {
        display.innerHTML += " = ";
        answer.innerHTML = (calculate(first,second,operation).toString());
        first = calculate(first,second,operation);
        second = "";
        operation = "*";
        reset = true;
    }
});

division.addEventListener("click", function() {
    if (first == ""){
        first ="0";
        operation = "/";
        display.innerHTML="0 / ";
    }
    else if (second=="" && operation =="" && first.length !=0) {
        operation = "/";
        display.innerHTML += " / ";
    }
    else if (second=="" && (operation=="+"||operation=="-"||operation=="*") && first.length!=0){
        operation = "/";
        display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length-3);
        display.innerHTML += " / ";
    }
    else if (second.length != 0 && operation.length != 0 && first.length != 0) {
        display.innerHTML += " = ";
        answer.innerHTML = (calculate(first,second,operation).toString());
        first = calculate(first,second,operation);
        second = "";
        operation = "/";
        reset = true;
    }
});

operate.addEventListener("click", function() {
    if (first.length != 0 && second.length!=0 && operation.length!=0) {
        p = calculate(first, second, operation);
        answer.innerHTML = `= ${p}`;
        reset = true;
    }
    else {
        return;
    }
});

function add(a, b) {
    return parseInt(a)+parseInt(b);
}
function sub(a, b) {
    return parseInt(a)-parseInt(b);
}
function mul(a, b) {
    return parseInt(a)*parseInt(b);
}
function divi(a, b) {
    return parseInt(a)/parseInt(b);
}
