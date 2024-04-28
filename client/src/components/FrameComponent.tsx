import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent.css";



const FrameComponent: FunctionComponent = ({}) => {
  return (
    <footer className="logo-container-group">
      <div className="logo-container1" />
      <div className="medium-length-displa-parent">
        <div className="medium-length-displa4">brand</div>
        <div className="medium-length-displa5">tm</div>
      </div>
      <div className="subscribe-wrapper">
        <div className="subscribe">
          <b className="subscribe1">Subscribe</b>
          <div className="input-wrapper">
            <div className="input">
              <div className="placeholder">Enter email</div>
              <img className="icon" alt="" src="/icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
