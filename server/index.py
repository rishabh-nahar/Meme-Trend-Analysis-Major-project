import pickle
from flask import Flask, jsonify, request
import pytesseract
from PIL import Image
from flask_cors import CORS
import pandas as pd
import requests
import joblib

app = Flask(__name__)
CORS(app)

SECRET_KEY = '12345678'
pytesseract.pytesseract.tesseract_cmd = 'C:/Program Files/Tesseract-OCR/tesseract.exe'

# Function to check API key
def is_valid_api_key(api_key):
    return api_key == SECRET_KEY

# Route to extract text from image
@app.route('/api/extract-text', methods=['POST'])
def extract_text():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'Empty file provided'}), 400

    try:
        image = Image.open(file)
        image = image.resize((800, 800))  
        image = image.convert('L')  
        image = image.point(lambda x: 0 if x < 128 else 255)  

        extracted_text = pytesseract.image_to_string(image, config='--psm 11')
        return jsonify({'text': extracted_text}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Load pre-trained models and vectorizers from pickle files
with open('models/model_humor.pkl', 'rb') as model_file:
   model_humor = pickle.load(model_file)

with open('models/model_sarcasm.pkl', 'rb') as model_file:
    model_sarcasm = pickle.load(model_file)

# Load pre-trained models from pickle files
with open('models/model_offensive.pkl', 'rb') as model_file:
    model_offensive = pickle.load(model_file)

# Load pre-trained models from pickle files
with open('models/model_motivational.pkl', 'rb') as model_file:
    model_motivational = pickle.load(model_file)

# Load pre-trained models from pickle files
with open('models/model_overall_sentiment.pkl', 'rb') as model_file:
    model_overall_sentiment = pickle.load(model_file)


# Repeat similar steps for other models
with open('models/vectorizer.pkl', 'rb') as vectorizer_file:
    vectorizer = pickle.load(vectorizer_file)

with open('models/model_sarcasm_vectorizer.pkl', 'rb') as vectorizer_file:
    model_sarcasm_vectorizer = pickle.load(vectorizer_file)

with open('models/model_offensive_vectorizer.pkl', 'rb') as vectorizer_file:
    model_offensive_vectorizer = pickle.load(vectorizer_file)

with open('models/model_motivational_vectorizer.pkl', 'rb') as vectorizer_file:
    model_motivational_vectorizer = pickle.load(vectorizer_file)

with open('models/model_overall_sentiment_vectorizer.pkl', 'rb') as vectorizer_file:
    model_overall_sentiment_vectorizer = pickle.load(vectorizer_file)


# Function to predict categories
def predict_categories(input_text, model, vectorizer):
    input_vector = vectorizer.transform([input_text])
    print(model,"Number of features in input_vector:", input_vector.shape[1])
    prediction = model.predict(input_vector)[0]
    return prediction
@app.route('/api/predict-categories', methods=['POST'])
def api_predict_categories():
     try:
         # Get input text from the request
         input_text = request.json['text']
         # Make predictions
         predictions = {
              'humor': predict_categories(input_text, model_humor, model_overall_sentiment_vectorizer),
              'sarcasm': predict_categories(input_text, model_sarcasm, model_overall_sentiment_vectorizer),
              'offensive': predict_categories(input_text, model_offensive, model_overall_sentiment_vectorizer),
              'motivational': predict_categories(input_text, model_motivational, model_overall_sentiment_vectorizer),
              'overall_sentiment': predict_categories(input_text, model_overall_sentiment, model_overall_sentiment_vectorizer),
            }

         # Return predictions as JSON response
         return jsonify(predictions)

     except Exception as e:
         # Handle errors
         return jsonify({'error': str(e)}), 500


@app.route('/get_memes', methods=['POST'])
def get_memes():
    # Load the pre-trained model
    model = joblib.load('./Dataset/memes_model.joblib')
    df = pd.read_csv('./Dataset/memes.csv')
    df = df.dropna()
    df['Description'] = df['Text0'] + ' ' + df['Text1']
    # Get input data from the request
    data = request.get_json()
    new_description = data['description']

    # Make prediction using the pre-trained model
    prediction = model.predict([new_description])[0]

    # Filter memes based on the predicted category
    predicted_memes = df[df['Industry'] == prediction]
    selected_memes = predicted_memes.sample(n=2)

    # Prepare response data
    memes_urls = []
    for index, meme_data in selected_memes.iterrows():
        url = f"https://api.imgflip.com/caption_image?template_id={meme_data['Meme_id']}&username=rishabhnahar&password=QTyk9F6g!YYbgBz&text0={meme_data['Text0']}&text1='{meme_data['Text1']}'"
        response = requests.post(url)
        if response.status_code == 200:
            memes_urls.append(response.json()['data']['url'])
        else:
            memes_urls.append(f"Error: {response.status_code}, {response.text}")

    return jsonify({"memes_urls": memes_urls})

if __name__ == '__main__':
    app.run(debug=True)