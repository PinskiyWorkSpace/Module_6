
const createHtml = () => {
  const div = document.createElement('div');
  div.classList.add('container');

  const p = document.createElement('p');
  p.classList.add('text');

  const input = document.createElement('input');
  input.classList.add('input');

  div.append(p, input);
  document.body.prepend(div);

  return {div, p, input};
};

const {p, input} = createHtml();

const setInput = () => {
  p.textContent = input.value;
  input.value = '';
};

const debounce = (callback, delay) => {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};

input.addEventListener('keyup', debounce(setInput, 1000));


