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

const getEmpleado = (id) => {
    const empleado = empleados.find( e => e.id == id)
    return empleado;
}

const getEmpleado1 = (id) => {
    const empleado = empleados.find( e => e.id === id);

    if( empleado ){
        return empleado;
    } else{
        return `Empleado con id ${id} no existe`;
    }
}

const getEmpleado2 = (id, callback) => {
    const empleado = empleados.find( e => e.id === id);

    if( empleado ){
        callback(empleado);
    } else{
        callback(`Empleado con id ${id} no existe`);
    }
}

const getEmpleado3 = (id, callback) => {
    const empleado = empleados.find( e => e.id === id);

    if( empleado ){
        callback(null, empleado);
    } else{
        callback(`Empleado con id ${id} no existe`);
    }
}

console.log(getEmpleado1(5));
getEmpleado3(5, (err, empleado) => {
    if(err){
        console.log('Error...');
        return console.log(err);
    }

    console.log('Si Existe...');
    console.log(empleado);
});

