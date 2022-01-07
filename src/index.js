import './styles.css';
import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList ();

todoList.todos.forEach(todo => crearTodoHtml( todo )) ;

// cuando se usa el forEach, si la funcion solo tiene un argumento se puede reescribir asi
// sin especificar los argumentos, si y solo si tiene un solo argumento.

// todoList.todos.forEach(crearTodoHtml) ;

// const newTodo = new Todo ( 'Aprender JavaScript');

// todoList.nuevoTodo ( newTodo );

// todoList.todos[0].imprimirClase ();

// newTodo.imprimirClase();

console.log( 'Todos', todoList.todos );


