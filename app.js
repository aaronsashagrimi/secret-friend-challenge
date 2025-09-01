let amigos = [];

//Función para agregar un amigo
function agregarAmigo (){
    
    //1. Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    //2. Validar la entrada
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si la entrada está vacía.
    }

    //3. Actualizar el array de amigos
    amigos.push(nombre);

    //4. Limpiar el campo de entrada
    inputAmigo.value = "";

    //Llama a la nueva función para mostrar la lista actualizada
    mostrarAmigos();
}

function mostrarAmigos(){
    // 1. Obtener el elemento de la lista (asumiendo que tiene el id 'listaAmigos')
  const lista = document.getElementById("listaAmigos");

  // 2. Limpiar la lista existente para evitar duplicados
  lista.innerHTML = '';
  
  // 3. Iterar sobre el array de amigos y agregar elementos
  for (let i = 0; i < amigos.length; i++) {
    const nombreAmigo = amigos[i];

    // Crear un nuevo elemento <li>
    const nuevoLi = document.createElement("li");

    // Asignar el nombre del amigo como contenido del <li>
    nuevoLi.textContent = nombreAmigo;

    // Agregar el nuevo <li> a la lista <ul>
    lista.appendChild(nuevoLi);
  }
}

function sortearAmigo() {
  // 1. Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // 2. Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // 3. Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // 4. Mostrar el resultado - CORRECCIÓN AQUÍ
  const resultadoDiv = document.getElementById('resultado'); // ✅ Cambiado a 'resultado'
  resultadoDiv.innerHTML = `<li>¡El amigo sorteado es: <strong>${amigoSorteado}</strong>!</li>`;
}