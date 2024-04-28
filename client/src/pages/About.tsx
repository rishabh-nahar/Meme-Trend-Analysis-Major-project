import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import "./About.css";

const About: FunctionComponent = () => {
  return (
    <>
      <div className="about">
        <FrameComponent3 />
        <FrameComponent4 />
        <FrameComponent5 />
        <FrameComponent6 />
        <FrameComponent7 />
      </div>
    </>
  );
};

export default About;
