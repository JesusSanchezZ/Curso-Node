require('colors');
//const { mostrarMenu, pausa } = require('./helpers/mensajes');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer')
const Tareas = require('./helpers/models/tareas');
const Tarea = require('./helpers/models/tarea');

console.clear();

const main = async () => {
    console.log('Hola');

    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción: ');
                //console.log(desc);
                tareas.crearTarea(desc);
            break;
            case '2':
                console.log(tareas._listado)
        }

        await pausa();
    } while( opt !== '0' );
    //mostrarMenu();

    
}

main();