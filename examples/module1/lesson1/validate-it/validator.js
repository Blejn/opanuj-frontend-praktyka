import { validate } from './validations';

export function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const value = input.value;
    const validationResult = validate(value);
    result.innerHTML = validationResult ? 'Valid' : 'Invalid';
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}
