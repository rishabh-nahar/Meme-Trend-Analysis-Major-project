import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent2.css";

export type FrameComponentType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  return (
    <div className="subscribe-container" style={frameDivStyle}>
      <div className="subscribe2">
        <b className="subscribe3">Subscribe</b>
        <div className="c-t-a-button-white">
          <div className="input1">
            <div className="placeholder1">Enter email</div>
            <img className="icon1" alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
