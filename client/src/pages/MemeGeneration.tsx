import { FunctionComponent } from "react";
import Memebox from "../components/Memebox";
import FrameComponent from "../components/FrameComponent";
import "./MemeGeneration.css";

const MemeGeneration: FunctionComponent = () => {
  return (
    <div className="meme-generation">
      <Memebox />
      <FrameComponent />
    </div>
  );
};

export default MemeGeneration;
