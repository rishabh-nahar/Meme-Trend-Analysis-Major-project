import joblib
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, classification_report
import pandas as pd


# Assuming 'encoded_df' is the DataFrame with encoded values


file_path = 'memes_sentiments.csv'  
encoded_df = pd.read_csv(file_path)


# Fill NaN values in 'text_corrected' column with an empty string
encoded_df['text_corrected'].fillna('', inplace=True)
# Define the categories
categories = ['humor', 'sarcasm', 'offensive', 'motivational', 'overall_sentiment']

# Create a dictionary to store the models
models = {}

# Iterate through each category and create a model
for category in categories:
    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(
        encoded_df['text_corrected'], encoded_df[category], test_size=0.2, random_state=42
    )

    # Create a pipeline with TfidfVectorizer and LogisticRegression
    model = Pipeline([
        ('tfidf', TfidfVectorizer()),
        ('clf', LogisticRegression())
    ])

    # Fit the model on the training data
    model.fit(X_train, y_train)

    # Save the model
    model_filename = f'models/{category}_model.pkl'
    joblib.dump(model, model_filename)

    # Store the model in the dictionary
    models[category] = model

    # Make predictions on the test set
    predictions = model.predict(X_test)

    # Evaluate the model
    accuracy = accuracy_score(y_test, predictions)
    report = classification_report(y_test, predictions)

    # Display results
    print(f"Category: {category}")
    print(f"Accuracy: {accuracy:.2f}")
    print("Classification Report:\n", report)
    print("="*50)

# Save the dictionary of models
joblib.dump(models, 'all_models.pkl')
