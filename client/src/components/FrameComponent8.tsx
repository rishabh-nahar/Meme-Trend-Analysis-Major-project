import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./FrameComponent8.css";

const FrameComponent8: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuOneTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="nav-parent">
      <Nav
        onMenuOneTextClick={onMenuOneTextClick}
        onMenuTwoTextClick={onMenuOneTextClick}
      />
      <div className="male-wrapper">
        <div className="male">
          <div className="text">
            <div className="headline">
              <div className="medium-length-displa-container">
                <p className="promote-your">{`PROMOTE YOUR `}</p>
                <p className="brand-with">BRAND WITH</p>
                <p className="memes">MEMES</p>
              </div>
            </div>
            <div className="button">
              <button className="cta-button-black4">
                <b className="action5">Free Trial</b>
              </button>
            </div>
          </div>
          <img
            className="cat-1-icon1"
            loading="lazy"
            alt=""
            src="/cat-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
