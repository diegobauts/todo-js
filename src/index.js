// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos);