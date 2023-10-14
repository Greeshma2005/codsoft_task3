const input = document.getElementById('input');
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => {
  button.addEventListener('click', perform);
});
function perform(eve) {
  const buttontext = eve.target.innerText;
  if (buttontext === 'AC') {
    input.value = '';
  } else if (buttontext === 'DEL') {
    input.value = input.value.slice(0, -1);
  } else if (buttontext === '=') {
    try {
      input.value = eval(input.value);
    } catch (error) {
      input.value = 'Error';
    }
  } else {
    input.value += buttontext;
  }
}
