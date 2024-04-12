class TodoView {
    constructor() {
      this.todoList = document.getElementById('todo-list');
    }
  
    render(todos) {
      this.todoList.innerHTML = '';
      todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.text;
        li.style.textDecoration = todo.completed ? 'line-through' : 'none';
        li.addEventListener('click', () => {
          controller.toggleTodo(todo.id);
        });
        this.todoList.appendChild(li);
      });
    }
  }
  
  export default TodoView;
  