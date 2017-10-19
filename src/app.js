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

const addButtons = (item) => {
  const checkbox = elementGenerator('input', '', 'incomplete-task');
  const close = elementGenerator('a', '&times;', 'delete-button')
  checkbox.type = 'checkbox';
  close.href = '#';
  item.prepend(checkbox);
  item.appendChild(close);
};

// Wait till the dom is rendered
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('#root');
  const wrapper = elementGenerator('div', '', 'todo-app');
  const ul = document.createElement('ul');
  const list = [elementGenerator('li', 'Checkbox'),
                elementGenerator('li', 'Line-through'),
                elementGenerator('li', 'Delete button')];   // TODO: Delete after implementing DB
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

  // TODO: Delete after implementing DB
  for(let i = 0; i < list.length; i++) {
    addButtons(list[i]);
  }
  renderList(ul, list);
  //

  ul.addEventListener('change', (event) => {
    const parent = event.target.parentNode;
    if(event.target.checked === true) {
      parent.className = 'complete-task';
    } else {
      parent.className = 'incomplete-task';
    }
  });

  button.addEventListener('click', (event) => {
    event.preventDefault();
    const li = elementGenerator('li', input.value);
    addButtons(li);
    list.push(li);
    input.value = '';
    renderList(ul, list);
  });

});
