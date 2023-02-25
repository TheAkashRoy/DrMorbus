from flask import Flask,jsonify
import DisInfo
import model
app = Flask(__name__)

@app.route('/')
def hello_world():
    return "sfivndlifvmdm"

@app.route('/risk/<name>')
def infoRisk(name):
    data = DisInfo.riskf(name)
    return jsonify(data)

@app.route('/precaution/<name>')
def infoPrecautions(name):
    data = DisInfo.precaution(name)
    return jsonify(data)

@app.route('/symptom/<name>')
def infoSymptoms(name):
    data = DisInfo.symptom(name)
    return jsonify(data)

@app.route('/<s1>/<s2>/<s3>/<s4>/<s5>')
def prediction(s1,s2,s3,s4,s5):
    data = model.modelPred(s1,s2,s3,s4,s5)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)