const fs = require('fs');

let salida ='';
console.clear();
salida += '====================================\n';
salida += '       Tabla del: 5\n';
salida += '====================================\n';

const base = 5

for(let i = 1; i <=10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
}

fs.writeFile('tabla-5.txt', salida, (err) =>{
    if (err) throw err;

    console.log('tabla-5.txt creado...');
});


