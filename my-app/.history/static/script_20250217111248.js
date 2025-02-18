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

@app.route('/tareas', methods=['POST'])
def agregar_tarea():
    nueva_tarea = request.json.get('tarea')
    if nueva_tarea:
        tareas.append(nueva_tarea)
        return jsonify({"mensaje": "Tarea agregada correctamente"}), 201
    return jsonify({"error": "Falta el campo 'tarea'"}), 400