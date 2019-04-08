from flask import Flask, jsonify
import pandas as pd 
import requests

app = Flask(__name__)

SI_soql_url = ('https://data.cityofnewyork.us/resource/nwxe-4ae8.json?' +\
        '$select=health,count(tree_id)' +\
        '&$where=boroname=\'Staten Island\'' +\
        '&$group=health').replace(' ', '%20')

SI_soql_url = pd.read_json(SI_soql_url)
    
    
    
@app.route('/', methods=['GET'])
def home():
        return '''<h1>DATA 608 - Project 5</h1>
        <p> Flask - based on trees in NYC (Project 4)'''    
    

@app.route('/species/<string:name>')
def return_health(hp):
    df1 = SI_soql_url[SI_soql_url['health'] == hp]
    return jsonify(df1)



if __name__ == '__main__':
    app.run(debug=False)
