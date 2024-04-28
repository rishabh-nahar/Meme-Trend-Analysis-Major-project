import { FunctionComponent, useCallback, useState } from "react";
import "./AnalysisContainer.css";
import axios from "axios";

export type AnalysisContainerType = {
  group5?: string;
  pageTitle?: string;
};

const AnalysisContainer: FunctionComponent<AnalysisContainerType> = ({
  pageTitle,
}) => {
  const onGENERATEDMEMETextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cat2Image']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);
  const [description, setDescription] = useState('');
  const [memeUrl, setMemeUrl] = useState('/cat-1@2x.png')

  const fetchMemes = async () => {
    try {
      console.log(description)
      const response = await axios.post(
        "http://127.0.0.1:5000/get_memes",
        { description: description }
      );
      console.log(response.data)

      const memesUrls = response.data.memes_urls;
      if (memesUrls && memesUrls.length > 0) {
        setMemeUrl(memesUrls[0]); // Display the first meme URL
      }

    }
    catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="display-containers-wrapper">
      <div className="display-containers">
        <div className="display-containers-inner">
          <div className="instance-group">
            <img className="frame-inner" alt="" src="/group-7.svg" />
            <h1 className="meme-generation1">{pageTitle}</h1>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="frame-parent2">
            <div className="cat-1-wrapper">
              <img
                className="cat-1-icon2"
                loading="lazy"
                alt=""
                src={memeUrl}
              />
            </div>
            <button className="cta-button-black5">
              <b className="action6">Browse Image</b>
            </button>
          </div>
          <div className="cat-2-parent">

            <div className="rectangle-div" />
            <div className="feature-one-wrapper">
              <div className="feature-one4">
                <b className="feature-one5">Meme Text</b>
                <textarea
                  className="c-t-a-button-black"
                  rows={18}
                  cols={25}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <button className="cta-button-black6" onClick={fetchMemes}>
              <b className="action7">Generate</b>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisContainer;
