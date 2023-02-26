from flask import Flask,jsonify
import DisInfo
import model
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
    return data

@app.route('/symptom/<name>')
def infoSymptoms(name):
    a =[]
    data = DisInfo.symptom(name)

    return data

@app.route('/<s1>/<s2>/<s3>/<s4>/<s5>')
def prediction(s1,s2,s3,s4,s5):
    data = model.modelPred(s1,s2,s3,s4,s5)
    return jsonify(data)

@app.route('/about/<disease>')
def about(disease):
    a = []
    b=mydict(disease)
    a.append(b);
    return a


if __name__ == "__main__":
    app.run(debug =True)



