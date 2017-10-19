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
}

// Wait till the dom is rendered
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('#root');
  const wrapper = elementGenerator('div', '', 'todo-app');
  const ul = document.createElement('ul');
  const form = elementGenerator('form', '', 'form-wrapper');
  const input = elementGenerator('input');
  const button = elementGenerator('button', 'Add to List')

  
  wrapper.appendChild(elementGenerator('h1', "Things I've Gotta Get Done", 'header'));

  root.appendChild(wrapper);

  wrapper.appendChild(ul)

  ul.appendChild(elementGenerator('li', 'test1'));
  ul.appendChild(elementGenerator('li', 'test2'));
  ul.appendChild(elementGenerator('li', 'test3'));

  wrapper.appendChild(form);

  input.placeholder = "What do I need to do today?";
  form.appendChild(input);
  form.appendChild(button);
  
});
