import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AnalysisContainer from "./AnalysisContainer";
import "./Memebox.css";
import FrameComponent3 from "./FrameComponent3";

const Memebox: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <section className="nav-group">
      <FrameComponent3 />
      <AnalysisContainer pageTitle="MEME GENERATION" />
    </section>
  );
};

export default Memebox;
