import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import "./FrameComponent3.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMenuOneTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onMenuTwoTextClick = useCallback(() => {
    navigate("/sentiment-analysis");
  }, [navigate])

  const onMenuThreeTextClick = useCallback(() => {
    navigate("/meme-generation");
  }, [navigate])


  return (
    <section className="nav-wrapper">
      <Nav
        onMenuOneTextClick={onMenuOneTextClick}
        onMenuTwoTextClick={onMenuTwoTextClick}
        onMenuThreeTextClick={onMenuThreeTextClick}
      />
    </section>
  );
};

export default FrameComponent3;
