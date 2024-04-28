import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./List.css";

export type ListType = {
  oval?: string;
  oval1?: string;
  oval2?: string;
  oval3?: string;
  oval4?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
};

const List: FunctionComponent<ListType> = ({
  oval,
  oval1,
  oval2,
  oval3,
  oval4,
  propGap,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
}) => {
  const listStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const showcaseAndEmbedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const publishAcrossSociaStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const sellYourVideosStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const embedYourWorkStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const embedYourWork1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div className="list" style={listStyle}>
      <div className="media-showcase-publish-sell">
        <div className="oval">
          <img className="oval-icon" loading="lazy" alt="" src={oval} />
        </div>
        <div className="showcase-and-embed" style={showcaseAndEmbedStyle}>
          Extract text from memes.
        </div>
      </div>
      <div className="media-showcase-publish-sell1">
        <div className="oval1">
          <img className="oval-icon1" loading="lazy" alt="" src={oval1} />
        </div>
        <div className="publish-across-socia" style={publishAcrossSociaStyle}>
          Preprocess and clean the text.
        </div>
      </div>
      <div className="media-showcase-publish-sell2">
        <div className="oval2">
          <img className="oval-icon2" loading="lazy" alt="" src={oval2} />
        </div>
        <div className="sell-your-videos" style={sellYourVideosStyle}>
          Assign scores (+1, -1, 0) based on sentiment and weight certain
          keywords.
        </div>
      </div>
      <div className="media-showcase-publish-sell3">
        <div className="oval3">
          <img className="oval-icon3" loading="lazy" alt="" src={oval3} />
        </div>
        <div className="embed-your-work" style={embedYourWorkStyle}>
          Sum up the scores to calculate a sentiment score out of 25.
        </div>
      </div>
      <div className="media-showcase-publish-sell4">
        <div className="oval4">
          <img className="oval-icon4" loading="lazy" alt="" src={oval4} />
        </div>
        <div className="embed-your-work1" style={embedYourWork1Style}>
          Higher scores may indicate a meme's potential to trend.
        </div>
      </div>
    </div>
  );
};

export default List;
