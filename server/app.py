from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
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

if __name__ == '__main__':
    app.run()