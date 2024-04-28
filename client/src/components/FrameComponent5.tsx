import { FunctionComponent } from "react";
import List from "./List";
import "./FrameComponent5.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className="sell-your-videos-work">
      <img className="cat-1-icon3" loading="lazy" alt="" src="/cat-1@2x.png" />
      <div className="content-parent">
        <div className="content">
          <h3 className="long-headline-on">Sentiment Analysis</h3>
          <div className="separated-they-live">
            Involves analyzing the emotional tone or sentiment expressed in the
            text associated with memes. Since memes often rely on a combination
            of images and text, extracting sentiment from the textual component
            can provide insights into how the audience might perceive and react
            to the meme.
          </div>
          <List
            oval="/oval.svg"
            oval1="/oval.svg"
            oval2="/oval.svg"
            oval3="/oval.svg"
            oval4="/oval.svg"
          />
        </div>
        <button className="cta-button-white1">
          <b className="action8">Generate</b>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent5;
