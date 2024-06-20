import html from './app.html?raw';

/**
 * 
 * @param {String} elementid 
 */
export const App = (elementid) => {


    //Cuando la funcion APP() se llama
(()=> {


    const app = document.createElement('div');
    //app.innerHTML = '<h1>Hola Mundo</h1>';
    app.innerHTML = html;
    document.querySelector(elementid).append( app );


})();



}