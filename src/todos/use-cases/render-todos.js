import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';


let element;


/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const renderTodos = ( elementId, todos = [] ) => {

    if ( !element )
    element = document.querySelector( elementId );

   if ( !elementId ) throw new Error (`Elemnt ${ elementId } not found `); 

   element.innerHTML = '';
   
    todos.forEach( todo => {

        element.append( createTodoHTML(todo) )
    });
}


