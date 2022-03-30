let nombre = 'Jesus';
console.log(nombre);

nombre = 'Santos';
console.log(nombre);

const getUsuarioById = (id) => {
    const usuario = {
        id,
        nombre: 'Pedro'
    }

    setTimeout(() => {
        console.log(usuario)
    }, 1500)
}

getUsuarioById(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUperCase());
});