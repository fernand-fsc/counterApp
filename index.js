const display = document.querySelector('.counter-preview');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', counter);

let value = 0;
function counter(e) {
    const btn = e.target.id;
    if (btn === 'increment') {
        value += 1;
    } else if (btn === 'decrement') {
        value -=1;
    } else if (btn === 'reset') {
        value = 0;
    } else {
    }

    display.textContent = value;
}
