import { FunctionComponent } from "react";
import List from "./List";
import "./FrameComponent6.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <section className="similarpatternsasabove">
      <img
        className="yellow-1-icon"
        loading="lazy"
        alt=""
        src="/yellow-1@2x.png"
      />
      <div className="similarpatternsasabove1">
        <div className="content1">
          <h3 className="long-headline-on1">Meme Generation</h3>
          <div className="similarpatternsasabove2">
            <div className="separated-they-live1">
              Involves analyzing the emotional tone or sentiment expressed in
              the text associated with memes. Since memes often rely on a
              combination of images and text, extracting sentiment from the
              textual component can provide insights into how the audience might
              perceive and react to the meme.
            </div>
            <List
              oval="/oval-5.svg"
              oval1="/oval-5.svg"
              oval2="/oval-5.svg"
              oval3="/oval-5.svg"
              oval4="/oval-5.svg"
              propGap="4px"
              propColor="#000"
              propColor1="#000"
              propColor2="#000"
              propColor3="#000"
              propColor4="#000"
            />
          </div>
        </div>
        <button className="cta-button-black7">
          <b className="action9">Generate</b>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent6;
