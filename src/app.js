'use strict'

import 'normalize.css';
import './style.css';
import { highlightIt, explodeIt } from './jquery.js';

const elementGenerator = (el, text, classNames) => {
  const html = document.createElement(el);
  if(text !== undefined) {
    html.innerHTML = text;
    if(Array.isArray(classNames) === true && classNames !== undefined) {
      for(let i = 0; i < classNames.length; i++){
        html.classList.add(classNames[i]);
      }
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
  const checkbox = elementGenerator('input');
  const close = elementGenerator('a', '&times;', ['delete-button'])
  checkbox.type = 'checkbox';
  close.href = '#';
  item.prepend(checkbox);
  item.appendChild(close);
};

// Wait till the dom is rendered
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('#root');
  const wrapper = elementGenerator('div', '', ['todo-app']);
  const ul = document.createElement('ul');
  const list = [elementGenerator('li', '<span>Placeholder1</span>', ['incomplete-task']),
                elementGenerator('li', '<span>Placeholder2</span>', ['incomplete-task']),
                elementGenerator('li', '<span>Placeholder3</span>', ['incomplete-task']),
                elementGenerator('li', '<span>Placeholder4</span>', ['incomplete-task']),
                elementGenerator('li', '<span>Placeholder5</span>', ['incomplete-task'])];   // TODO: Delete after implementing DB
  const form = elementGenerator('form', '', ['form-wrapper']);
  const addToList = elementGenerator('input', '', ['add-to-list']);
  const button = elementGenerator('button', 'Add to List')
  
  wrapper.appendChild(elementGenerator('h1', "Things I've Gotta Get Done", ['header']));
  root.appendChild(wrapper);
  wrapper.appendChild(ul)
  wrapper.appendChild(form);

  addToList.placeholder = "What do I need to do today?";
  form.appendChild(addToList);
  form.appendChild(button);

  // TODO: Delete after implementing DB
  for(let i = 0; i < list.length; i++) {
    addButtons(list[i]);
  }
  renderList(ul, list);
  //

  // Check/uncheck task completion
  ul.addEventListener('change', (event) => {
    const parent = event.target.parentNode;
    if(event.target.checked === true) {
      parent.className = 'complete-task';
    } else {
      parent.className = 'incomplete-task';
    }
  });

  // Delete task
  ul.addEventListener('click', (event) => {
    const parent = event.target.parentNode;
    if(event.target.tagName === 'A') {
      const parentIndex = list.indexOf(parent);
      explodeIt(parent);
      setTimeout(() => {
        list.splice(parentIndex, 1);
        ul.removeChild(parent);
      }, 200);
    }
  });

  // Add new task to list
  button.addEventListener('click', (event) => {
    event.preventDefault();
    if(addToList.value.length > 0) {
      const li = elementGenerator('li', `<span>${addToList.value}</span>`, ['incomplete-task']);
      addButtons(li);
      list.push(li);
      highlightIt(li);
      addToList.value = '';
      renderList(ul, list);
    }
  });
});
