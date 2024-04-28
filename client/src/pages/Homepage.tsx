import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import "./Homepage.css";

const Homepage: FunctionComponent = () => {
  return (
    <div className="homepage">
      <section className="frame-parent">
        <FrameComponent8 />
        {/* <div className="explore-parent">
          <div className="explore">EXPLORE</div>
          <div className="explore1">EXPLORE</div>
          <div className="explore2">EXPLORE</div>
          <div className="explore3">EXPLORE</div>
          <div className="explore4">EXPLORE</div>
          <div className="explore5">EXPLORE</div>
          <div className="explore6">EXPLORE</div>
          <div className="explore7">EXPLORE</div>
          <div className="explore8">EXPLORE</div>
        </div> */}
      </section>
      <section className="clouds-1-parent">
        <img className="clouds-1-icon" alt="" src="/clouds-1@2x.png" />
        <div className="long-headline-to-tur-parent">
          <div className="long-headline-to">
            Elevate Your Brand with Memes: Ignite Engagement, Spark Laughter,
            and Make a Lasting Impression!"
          </div>
          <div className="cta-button-white-wrapper">
            <div className="cta-button-white">
              <b className="action">Join Us</b>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent9 />
    </div>
  );
};

export default Homepage;
