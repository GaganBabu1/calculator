
const screen = document.querySelector('.screen');

function appendChar(char) {
    screen.value += char;
}

function clearScreen() {
    screen.value = '';
}

function clearLast() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
    }
}