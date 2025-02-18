from  flask import Flask, render_template,jsonify, request

app = Flask(__name__)

tareas = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('tareas', methods=['GET'])
def obtener_tareas():
    return jsonify(tareas)

@app.route('/tareas', methods=['POST'])
def agregar_tarea():
     nueva_tarea = request.json.get('tarea')
    if nueva_tarea:
        tareas.append(nueva_tarea)
        return jsonify({"mensaje": "Tarea agregada correctamente"}), 201
    return jsonify({"error": "Falta el campo 'tarea'"}), 400
