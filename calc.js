
let display = document.getElementById('display');
function appendNumber(num) {
    display.value += num;
}
function clearDisplay() {
    display.value = '';
}
function backspace() {
    display.value = display.value.slice(0, -1);
}
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
function add() {
    display.value += '+';
}
function subtract() {
    display.value += '-';
}
function multiply() {
    display.value += '*';
}
function divide() {
    display.value += '/';
}