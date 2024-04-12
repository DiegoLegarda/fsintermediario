class TodoModel {
  constructor() {
    if (!TodoModel.instance) {
      this.todos = [];
      TodoModel.instance = this;
      this.observers = [];
    }
    return TodoModel.instance;
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update());
  }

  addTodo(todo) {
    this.todos.push({ id: Date.now(), text: todo, completed: false });
    this.notifyObservers();
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.notifyObservers();
  }

  toggleTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.notifyObservers();
  }

  getTodos() {
    return this.todos;
  }
}

export default TodoModel;
