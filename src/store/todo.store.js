import { Todo } from '../todos/models/todo.model';


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {

    todos: [
        new Todo('Piedra del Alma'),
        new Todo('Piedra del Realidad'),
        new Todo('Piedra del Tiempo'),
        new Todo('Piedra del Poder'), 
        new Todo('Piedra del Espacio'), 
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All ) => {

    switch ( filter ) {
        
            case Filters.All:
                return [...state.todos];
            
            case Filters.Completed:
                return state.todos.filter( todo => todo.done );

            case Filters.Pending:
                return state.todos.filter( todo => !todo.done );

            default:
                throw new Error(`Option ${ filter } is not valid.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) =>{

    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description) );
        
    
}
/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {

        if( todo.id === todoId ) {
            todo.done = !todo.done;
        }
        return todo;
    });
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id != todoId );
}

const deleteCompled = () => {
    state.todos = state.todos.filter( todo => todo.done );
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompled,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}