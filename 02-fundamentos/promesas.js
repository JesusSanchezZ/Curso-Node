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

    const promesa = new Promise((resolve, reject) =>{
        const empleado = empleados.find( e => e.id === id).nombre;

        if(empleado){
            resolve(empleado);
        }else{
            reject(`Empleado con id ${id} no existe`);
    }
    });

    return promesa;
}

const id = 10;
getEmpleado(id)
    .then( empleado => console.log(empleado))
    .catch( err => console.log(err));