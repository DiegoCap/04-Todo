import { Todo } from './todo-class'

export class TodoList {

    constructor () {
        
        //this.todos = [];
        this.cargarLocalStorage();
    
    }

    nuevoTodo ( todo ) {

        this.todos.push( todo );
        this.guardarLocalStorage();
    }
 

    eliminarTodo ( id ) {

        this.todos = this.todos.filter( todo => todo.id != id);
        this.guardarLocalStorage();
    
    }

    marcarCompletado ( id ) {
         
        for (const todo of this.todos) {

            console.log( id, todo.id );
            
            if ( todo.id == id ) {

                todo.completado = !todo.completado;

                this.guardarLocalStorage();

                break;
            }

        }
    }

    eliminarCompletados () {

        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();

    }  

guardarLocalStorage () {

    localStorage.setItem( 'todo', JSON.stringify (this.todos)); // para poder guardar en el storage se usa la función JSON.stringify
    
}


cargarLocalStorage () {

    // if (localStorage.getItem ('todo')) {

    //  this.todos = JSON.parse ( localStorage.getItem ('todo') ); // JSON invierte el estado a objeto
    //  console.log ( 'cargar local', this.todos );

    // } else{ 

    //     this.todos = []; // si no hay nada en el storage se inicializa como en el constructor
    // }

// Solucion tarea replantearlo como operador ternario la condición if

     this.todos = (localStorage.getItem ('todo')) 
                ? (JSON.parse( localStorage.getItem ('todo')))
                :[];

     this.todos = this.todos.map ( obj => Todo.fromJson ( obj ));

     //Tambien se podria optimizar la linea anterior cuando en el parentesis el objeto es 
     //el mismo argumento

     //this.todos = this.todos.map ( Todo.fromJson );


}




}