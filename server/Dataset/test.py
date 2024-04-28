import random
import pandas as pd

# Sample website dataset
website_data = [
    "This website has amazing user experience!",
    "Loading times are frustratingly slow."
]

# Convert the list of strings to a Pandas DataFrame
website_data = pd.DataFrame({"Review": website_data})

meme_data = pd.read_csv('custom_memes.csv')

# Print the first few rows of each dataset to check the structure
print("Website Data:")
print(website_data.head())

print("\nMeme Data:")
print(meme_data.head())

# Check the data types and confirm that they are DataFrames
print("\nData Types:")
print("Website Data:", type(website_data))
print("Meme Data:", type(meme_data))

# Function to generate meme-like text
def generate_meme_text(row):
    meme_row = random.choice(meme_data[meme_data['Meme_name'] == row['Review']].itertuples())
    text0 = meme_row.Text0
    text1 = meme_row.Text1
    return f"{text0} {text1}"

# Apply the function to create a new column 'Meme_Text' in the website_data DataFrame
website_data['Meme_Text'] = website_data.apply(generate_meme_text, axis=1)

# Save the combined dataset
website_data.to_csv('path_to_combined_data.csv', index=False)

