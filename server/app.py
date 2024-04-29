from flask import Flask, request, jsonify
import joblib
import numpy as np 
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the serialized model
model = joblib.load('lasso_regression_model.pkl')

@app.route('/')
def hello():
    return 'Hello, World! This is test'

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from the request
    data = request.json

    # Parse JSON data into a Python dictionary
    # data_dict = json.loads(data)

    # Extract values from the dictionary
    data_values = list(data.values())
    int_data_values = [int(x) for x in data_values]

    # Convert to NumPy array (optional)
    data_array = np.array(int_data_values).reshape(1, -1)
    print('this is not reshaped', int_data_values)
    print('this is reshaped' , data_array)

    # return jsonify(data)

    # Make predictions using the loaded model
    predictions = model.predict(data_array)
    
    # Return the predictions as JSON
    return jsonify({'predictions': predictions.tolist()})

if __name__ == '__main__':
    app.run(debug=True)