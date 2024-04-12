class TodoController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.init();
    }
  
    init() {
      this.view.render(this.model.getTodos());
  
      const addBtn = document.getElementById('add-btn');
      addBtn.addEventListener('click', () => {
        const todoInput = document.getElementById('todo-input');
        const todo = todoInput.value.trim();
        if (todo !== '') {
          this.model.addTodo(todo);
          todoInput.value = '';
          this.view.render(this.model.getTodos()); // Actualizar la vista después de agregar la tarea
        }
      });
    }
  }
  
  export default TodoController;
  