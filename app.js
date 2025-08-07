
let friendsList  = [];

//Referencias al DOM
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function addFriend(){
    const inputAmigo  = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    //Validación del campo vacío
    if (nombre === ''){
        alert('Por favor, inserte un nombre');
        return;
    }

    //Agregar el nombre a la lista
    friendsList.push(nombre);
    //Limpiar y enfocar el input
    inputAmigo.value = '';
   
    
}
