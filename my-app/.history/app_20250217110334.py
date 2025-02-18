from  flask import Flask, render_template,jsonify, request

app = Flask(__name__)

tareas = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('tareas', methods=['GET'])
def obtener_tareas():
    