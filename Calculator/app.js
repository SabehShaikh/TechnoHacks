let input = document.getElementById('input-content');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;
        handleButtonClick(buttonText);
    });
});

const handleButtonClick = (buttonText) => {
    switch (buttonText) {
        case '=':
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
            break;

        case 'AC':
            string = "";
            input.value = string;
            break;

        case 'DEL':
            string = string.substring(0, string.length - 1);
            input.value = string;
            break;

        default:
            string += buttonText;
            input.value = string;
    }
}