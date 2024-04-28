import { FunctionComponent } from "react";
import "./Nav.css";

export type NavType = {
  /** Action props */
  onMenuOneTextClick?: () => void;
  onMenuTwoTextClick?: () => void;
  onMenuThreeTextClick?: () => void
};

const Nav: FunctionComponent<NavType> = ({
  onMenuThreeTextClick,
  onMenuOneTextClick,
  onMenuTwoTextClick,
}) => {
  return (
    <header className="nav">
      <div className="header-display">
        <div className="logo-black">
          <div className="medium-length-displa">brand</div>
          <div className="medium-length-displa1">tm</div>
        </div>
      </div>
      <div className="explore-container">
        <div className="menu-one-wrapper">
          <div className="menu-one" onClick={onMenuOneTextClick}>
            About
          </div>
        </div>
        <div className="menu-one-wrapper">
          <div className="menu-two" onClick={onMenuTwoTextClick}>
            Analyze Trend
          </div>
        </div>
        <div className="menu-three-wrapper">
          <div className="menu-three" onClick={onMenuThreeTextClick}>
            Generate Meme
          </div>
        </div>

        <button className="cta-button-black3">
          <b className="action4">Join Us</b>
        </button>
      </div>
    </header>
  );
};

export default Nav;
