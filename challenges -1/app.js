const button = document.querySelector("#toggleButton");
const stustBtn = document.querySelector('#status');
const body = document.querySelector('#body');
const bulb = document.querySelector('#bulb');

button.addEventListener('click', () => {
    if (button.textContent === 'Turn On') {
        button.textContent = 'Turn Off';
        stustBtn.textContent = 'Status: On';
        body.classList.add('dark-mode');
        bulb.classList.remove('off');
        bulb.classList.add('on');
    } else {
        button.textContent = 'Turn On';
        stustBtn.textContent = 'Status: Off';
        body.classList.remove('dark-mode');
        bulb.classList.remove('on');
        bulb.classList.add('off');
    }
});