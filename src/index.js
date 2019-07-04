import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;


class TodoApp {
  constructor() {
    this.initDomElements();
  }

  initDomElements() {
    this.todoInput = document.getElementsByClassName('todo-input')[0];
    this.todoListView = document.getElementById('todo-list');
    this.todoAddButton = document.getElementById('todo-add');

    this.todoAddButton.addEventListener('click', this.addTodoItem.bind(this));
  }

  addEventsDragAndDrop(el) {
    el.addEventListener('dragstart', dragStart, false);
    // el.addEventListener('dragenter', dragEnter, false);
    el.addEventListener('dragover', dragOver, false);
    // el.addEventListener('dragleave', dragLeave, false);
    el.addEventListener('drop', dragDrop, false);
    // el.addEventListener('dragend', dragEnd, false);
  }

  addTodoItem() {
    let inputVal = this.todoInput.value;
    var li = document.createElement('li');
    var attr = document.createAttribute('draggable');
    var ul = this.todoListView;
    li.className = 'draggable';
    attr.value = true;
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(inputVal));
    ul.appendChild(li);
    this.addEventsDragAndDrop(li);
  }
}

function dragStart(e) {
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'move';
  console.log(this.innerHTML)
  e.dataTransfer.setData('text/html', this.innerHTML);
};

function dragOver(e) {
  e.preventDefault();
}

function dragDrop(e) {
  this.innerHTML = e.dataTransfer.getData('text/html');
  return false;
}

const todo = new TodoApp();
console.log(todo)