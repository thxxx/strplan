from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from content import synopsis_generate, topic_generate
import re

app = Flask(__name__)
cors = CORS(app, resources={r"/*":{"origins":"*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/gen', methods=['POST'])
@cross_origin()
def hello_world():
    req_data = request.get_json()
    print("Got data from client : ", req_data)
    return jsonify("")

@app.route('/topic', methods=['POST'])
@cross_origin()
def topic_gen():
    req_data = request.get_json()
    print("Got data from client : ", req_data)
    originalList, prompt, type, info = req_data['originalList'], req_data['prompt'], req_data['type'], req_data['info']

    output = topic_generate(originalList=originalList, prompt=prompt, type=type, info=info)

    print("output : ", output)

    response = {
        "data": output['data'],
        "total_tokens": output['total_tokens']
    }
    
    return jsonify(response)

@app.route('/synopsis', methods=['POST'])
@cross_origin()
def synopsis_gen():
    req_data = request.get_json()
    print("Got data from client : ", req_data)

    prompt, synopsis, degree, info = req_data['prompt'], req_data['synopsis'], req_data['degree'], req_data['info']
    output = synopsis_generate(prompt, synopsis, degree, info)

    response = {
        "data": output['data'],
        "total_tokens": output['total_tokens']
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run()