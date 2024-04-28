import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import FrameComponent from "../components/FrameComponent";
import axios from "axios"; // Import axios for making HTTP requests
import "./SentimentAnalysis.css";
import FrameComponent3 from "../components/FrameComponent3";

// Define the TextAnalysisResponse interface
interface TextAnalysisResponse {
  [key: string]: string;
}

const SentimentAnalysis: FunctionComponent = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | string>(
    "/cat-1@2x.png"
  );

  const [extractedText, setExtractedText] = useState<string>("");
  const [score, setScore] = useState<string>("0/25");


  // Function to handle file selection
  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
      console.log("Selected file:", file);
      // Call API to extract text when a file is selected
      extractText(file);
    } else {
      setSelectedImage("/cat-1@2x.png");
      console.log("No file selected, using default image.");
    }
  };

  // Function to extract text from the image using an API
  const extractText = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post<{ text: string }>(
        "http://localhost:5000/api/extract-text",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-API-Key": "12345678", // Example API key, replace with your actual API key
          },
        }
      );
      setExtractedText(response.data.text);
    } catch (error) {
      console.error("Error extracting text:", error);
    }
  };

  // Function to handle text extraction and score calculation
  const handleTextExtractionAndScoreCalculation = async (event: any) => {
    try {
      const response = await axios.post<TextAnalysisResponse>(
        "http://localhost:5000/api/predict-categories",
        { text: extractedText }
      );
      const respData = response.data;
      console.log(response)
      let totalScore = 0;
      const scores: { [key: string]: { [key: string]: number } } = {
        humor: { hilarious: 5, not_funny: 2, very_funny: 4, funny: 3 },
        motivational: { not_motivational: 5, motivational: 3 },
        sarcasm: { general: 3, not_sarcastic: 5, twisted_meaning: 4, very_twisted: 2 },
        offensive: { not_offensive: 5, very_offensive: 2, slight: 3 },
        overall_sentiment: { very_positive: 5, positive: 4, neutral: 3, negative: 2, very_negative: 1 },
      };

      for (const category in respData) {
        if (scores[category]) {
          const categoryScore = scores[category][respData[category]];
          totalScore += categoryScore;
        }
      }

      setScore(`${totalScore}/25`);
    } catch (error) {
      console.error("Error calculating score:", error);
    }
  };

  console.log("Selected image:", selectedImage);

  return (
    <div className="sentiment-analysis">
      <FrameComponent3 />
      <section className="sentiment-analysis-inner">
        <div className="frame-group">
          <div className="frame-wrapper">
            <div className="instance-parent">
              <img className="frame-child" alt="" src="/group-7.svg" />
              <h1 className="sentiment-analysis1">SENTIMENT ANALYSIS</h1>
            </div>
          </div>
          <div className="frame-container">
            <div className="frame-div">
              <div className="cat-1-parent">
                {/* Display selected image if exists */}
                <img
                  className="cat-1-icon"
                  loading="lazy"
                  alt=""
                  src={
                    selectedImage instanceof File
                      ? URL.createObjectURL(selectedImage)
                      : selectedImage
                  }
                />
                <div className="c-t-a-buttons-container">
                  <div className="action-button">
                    {/* Replace button with input file */}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e)}
                      style={{ display: "none" }}
                      id="upload-image"
                    />
                    <label htmlFor="upload-image" className="cta-button-black">
                      <b className="action1">Upload Image</b>
                    </label>
                  </div>
                </div>
              </div>
              <div className="cta-button-black-parent">
                {/* Check Score button */}
                <button className="cta-button-black2" style={{ color: "white" }} onClick={e => handleTextExtractionAndScoreCalculation(e)}>
                  Check score
                </button>
                <div className="feature-one-container">
                  <div className="feature-one-title" />
                  <div className="feature-one">
                    <b className="feature-one1">Meme Text</b>
                    <textarea
                      className="feature-two-description"
                      rows={11}
                      cols={25}
                      value={extractedText}
                      onChange={(e) => setExtractedText(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="frame-item" />
                    <b className="b"> {score} </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default SentimentAnalysis;
