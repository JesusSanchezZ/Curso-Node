const empleados = [
    {
        id: 1,
        nombre: 'Jesus'
    },
    {
        id: 2,
        nombre: 'Javier'
    },
    {
        id: 3,
        nombre: 'Jebus'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 500
    }
];

const getEmpleado = ( id ) => {

    
    return new Promise(( resolve, reject ) => {

        const empleado = empleados.find( e => e.id === id );

        ( empleado ) 
            ? resolve( empleado.nombre )
            : reject( `No existe empleado con id ${ id }` );
    });
}

const getSalario = () => {
    return new Promise(( resolve, reject ) => {

        const salario = salarios.find( s => s.id === id );

        ( salario ) 
            ? resolve( salario.salario )
            : reject( `No existe salario con id ${ id }` );
    });
}

const getInfoUsuario = async (id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado ${empleado} es de ${salario}`;   
    } catch (error) {
        throw error;
    }
}

getInfoUsuario(4)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));

const id = 1;

