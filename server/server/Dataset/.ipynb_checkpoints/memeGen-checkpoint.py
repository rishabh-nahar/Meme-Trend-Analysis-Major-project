# Import necessary libraries
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.metrics import classification_report
import requests
from urllib.parse import quote


# Load your dataset
# Assuming you have a CSV file named 'meme_data.csv' with columns 'Text0', 'Text1', 'Industry'
# You may need to adjust the file name and column names accordingly
df = pd.read_csv('custom_memes.csv')

# Display the original dataset
print("Original Dataset:")

# Check for missing values
missing_values = df.isnull().sum()
print("\nMissing Values:")

# Drop rows with missing values (if any)
df = df.dropna()

# Display the cleaned dataset
print("\nCleaned Dataset:")


# Concatenate the text columns into a single description column
df['Description'] = df['Text0'] + ' ' + df['Text1']
# Split the dataset into training and testing sets
train_data, test_data, train_target, test_target = train_test_split(
    df['Description'], df['Industry'], test_size=0.2, random_state=42
)

# Build a text classification model using TF-IDF and Linear SVM
svm_model = make_pipeline(TfidfVectorizer(), SVC(kernel='linear'))
svm_model.fit(train_data, train_target)

# Make predictions on the test set
svm_predictions = svm_model.predict(test_data)

# Evaluate the SVM model
print("Linear SVM Model Evaluation:")
print(classification_report(test_target, svm_predictions))

# New input description
new_description = "Online"

# Make predictions for the new input
new_prediction = svm_model.predict([new_description])

# Display the predicted industry category
print(f"Predicted Industry: {new_prediction}")

# Retrieve memes related to the predicted industry
predicted_memes = df[df['Industry'] == new_prediction[0]]


# # Display the memes
# for index, data in predicted_memes.iterrows():
#     meme_id = data['Meme_id']
#     text0 = data['Text0']
#     text1 = data['Text1']

#     # Construct the URL
#     url = f"https://api.imgflip.com/caption_image?template_id={(meme_id)}&username=rishabhnahar&password=QTyk9F6g!YYbgBz&text0={quote(text0)}&text1={quote(text1)}"

#     # print(url) # print(data.Meme_id)



#     # Make the API call
#     response = requests.post(url)

#     # Check if the request was successful (status code 200)
#     if response.status_code == 200:
#         # Print the response content (usually in JSON format)
#         print("API Response:")
#         # print(response.json())
#       # Access the URL from the JSON response
#         image_url = response.json().get('data', {}).get('url')
#         print(image_url)
#     else:
#         # Print an error message if the request was not successful
#         print(f"Error: {response.status_code}, {response.text}")


print(df['Industry'].value_counts())