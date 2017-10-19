import 'normalize.css';
import './style.css';

const elementGenerator = (el, text, newClassName) => {
  const html = document.createElement(el);
  if(text !== undefined) {
    html.innerHTML = text;
    if(newClassName !== undefined) {
      html.className = newClassName;
    }
  }
  return html;
};

const renderList = (ul, list) => {
  for(let i = 0; i < list.length; i++) {
    ul.appendChild(list[i]);
  }
};

// Wait till the dom is rendered
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('#root');
  const wrapper = elementGenerator('div', '', 'todo-app');
  const ul = document.createElement('ul');
  const list = [elementGenerator('li', 'Checkbox'),
                elementGenerator('li', 'Line-through'),
                elementGenerator('li', 'Delete button')];
  const form = elementGenerator('form', '', 'form-wrapper');
  const input = elementGenerator('input');
  const button = elementGenerator('button', 'Add to List')
  
  wrapper.appendChild(elementGenerator('h1', "Things I've Gotta Get Done", 'header'));
  root.appendChild(wrapper);
  wrapper.appendChild(ul)
  wrapper.appendChild(form);

  input.placeholder = "What do I need to do today?";
  form.appendChild(input);
  form.appendChild(button);

  renderList(ul, list);

  button.addEventListener('click', (event) => {
    event.preventDefault();
    list.push(elementGenerator('li', input.value));
    input.value = '';
    renderList(ul, list);
  });

});
