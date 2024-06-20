import { Todo } from '../todos/models/todo.model';


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {

    todo: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del Infinito'),
        new Todo('Piedra del tiempo'),  
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

export default {
    initStore,
}