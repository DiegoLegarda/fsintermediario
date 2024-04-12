import TodoModel from './models/todomodel.js';
import TodoView from './view/vista.js';
import TodoController from './controller/controlador.js';

const model = new TodoModel();
const view = new TodoView();
const controller = new TodoController(model, view);

controller.init();
view.render(model.getTodos());
