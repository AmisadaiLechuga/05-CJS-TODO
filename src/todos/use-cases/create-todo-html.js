import { Todo } from "../models/todo.model";

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = ( todo ) =>{
    if( !todo ) throw new Error('A TODO object is required');

    const { done, description, id } = todo; //desestructuracion de datos para no poner ---> todo.id, todo.description, todo.done sino solo ---> done, description and id
    const html = `
                    <div class="view">
                        <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
                        <label>${ description }</label>
                        <button class="destroy"></button>
                    </div>
                        <input class="edit" value="Create a TodoMVC template">
                `;
    //const html = `<h1>${ todo.description }</h1>`; cambiarlo por el codigo de arriba
    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    //liElement.setAttribute('data-id', todo.id);
    liElement.setAttribute('data-id', id);

    if (todo.done)
    liElement.classList.add('completed');



    return liElement;

}