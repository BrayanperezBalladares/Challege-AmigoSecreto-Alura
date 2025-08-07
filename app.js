
let friendsList  = [];

function agregarAmigo(){
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

function showList(){
    const lista = document.getElementById('listaAmigos'); // Obtener la lista de amigos
    lista.innerHTML = ''; //Limpiar la lista existente

    //Recorrer la lista de amigos y crear un elemento li para cada uno
    friendsList.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');

    //Validar que haya amigos disponibles
    if (friendsList.length === 0) {
        resultado.innerHTML = '<li>No hay amigos para sortear</li>';
        return;
    }

    //Generar un índice aleatorio
    const indice = Math.floor(Math.random() * friendsList.length);

    //obtener el nombre sorteado
    const amigoSorteado = friendsList[indice];

    //Mostrar el resultado
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
