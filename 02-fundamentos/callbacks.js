setTimeout(() => {
    console.log('hola...');
}, 1000);

const getUsuarioById = (id , callback) => {
    const usuario = {
        id,
        nombre: 'Yo'
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500)
}

getUsuarioById(10,(user) => {
    console.log(user);
});