document.addEventListener("DOMContentLoaded", cargarTareas);

function cargarTareas() {
    fetch('/tareas')
        .then(response => response.json())
        .then(data => {
            const listaTareas = document.getElementById('listaTareas');
            listaTareas.innerHTML = "";
            data.forEach((tarea, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${tarea} <button onclick="eliminarTarea(${index})">❌</button>`;
                listaTareas.appendChild(li);
            });
        });
}

