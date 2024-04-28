import pandas as pd

file_path = 'labels.csv'  
df = pd.read_csv(file_path)

scores = {
    'humor': {'hilarious': 5, 'not_funny': 2, 'very_funny': 4, 'funny': 3},
    'sarcasm': {'general': 3, 'not_sarcastic': 5, 'twisted_meaning': 4, 'very_twisted': 2},
    'offensive': {'not_offensive': 5, 'very_offensive': 2, 'slight': 3},
    'motivational': {'not_motivational': 5, 'motivational': 3},
    'overall_sentiment': {'very_positive': 5, 'positive': 4, 'neutral': 3, 'negative': 2, 'very_negative': 1},
}

encoded_df = df.copy()

encoded_df.replace(scores, inplace=True)

print(encoded_df)
output_file_path = 'memes_sentiments.csv'  
encoded_df.to_csv(output_file_path, index=False)

print(f'Dataset with encoded labels saved to {output_file_path}')
