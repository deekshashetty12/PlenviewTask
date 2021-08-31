from flask import Flask,request,jsonify;
from  fetch_data_from_db import fetch_all_data, insert_data_val, delete_data;
from fetch_random_data import fetchdata;

app = Flask(__name__)


@app.route('/fetch_data')
def fetch_data():
    res = fetch_all_data()
    data_vals = fetchdata()
    response = jsonify(data=res, datavals=data_vals)

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/insert_comment', methods=['GET', 'POST'])
def insert_comments():
    comment = request.args.get('comment')
    user = request.args.get('user')
    res1 = insert_data_val(comment, user)
    res = fetch_all_data()
    data_vals = fetchdata()
    response = jsonify(data=res, datavals=data_vals)

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
    
@app.route('/delete_comment', methods=['GET', 'POST'])
def delete_comment_data():
    id = request.args.get('id')
    res = delete_data(id)
    res = fetch_all_data()
    data_vals = fetchdata()
    response = jsonify(data=res, datavals=data_vals)

    # Enable Access-Control-Allow-Origin
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__=='__main__':
    app.run()