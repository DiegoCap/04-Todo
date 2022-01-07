

export class Todo {

   // se crea un método para recuperar lo que se guardo en el storage como objeto y no como instancia
   // para asi poder utilizar sus metodos.
   
   static fromJson ( { id, tarea, completado, creado  } ) {
          
      const tempTodo = new Todo ( tarea );

      tempTodo.id         = id;
      tempTodo.completado = completado
      tempTodo.creado     = creado;

      return tempTodo;

   }


   constructor ( tarea ) {

    this.tarea      = tarea;

    this.id         = new Date().getTime();
    this.completado = false;

    this.creado = new Date();

   }


   imprimirClase () {

   console.log(`${ this.tarea } - ${ this.id }` );

   }


}