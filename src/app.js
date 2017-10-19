import 'normalize.css';
import './style.css';

// Wait till the dom is rendered
document.addEventListener("DOMContentLoaded", function () {
  const root = document.querySelector('#root');
  
  const generateWrapper = (wrapperClass) => {
    const html = document.createElement('div');
    html.className = wrapperClass;
    return html;
  }

  const generateElement = (el, text, newClassName) => {
    const html = document.createElement(el);
    if(text !== undefined) {
      html.innerHTML = text;
      if(newClassName !== undefined) {
        html.className = newClassName;
      }
    }
    return html;
  }
  
  const wrapper = generateWrapper('todo-app');
  wrapper.appendChild(generateElement('h1', 'Things I\'ve Gotta Get Done', 'header'));

  root.appendChild(wrapper);
});
