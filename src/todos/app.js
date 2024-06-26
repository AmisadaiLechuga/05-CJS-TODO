import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
}


/**
 * 
 * @param {String} elementid 
 */
export const App = (elementid) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        console.log(todos);
        renderTodos( ElementIDs.TodoList, todos );
    }

    //Cuando la funcion APP() se llama
(()=> {


    const app = document.createElement('div');
    //app.innerHTML = '<h1>Hola Mundo</h1>';
    app.innerHTML = html;
    document.querySelector(elementid).append( app );
    displayTodos();

})();



}