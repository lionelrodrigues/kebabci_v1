import React from "react";
import { Button, Title } from "../../Buttons";
import "./Bulksection.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Bulksection() {
  return (
    <div className="bulk-section">
      <Fade duration={500}>
        <div className="Glass-container">
          <Zoom left delay={500}>
            <Title>try our bulk menu ?</Title>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search.
            </p>
            <Button primary> Bulk Menu</Button>
          </Zoom>
        </div>
      </Fade>
    </div>
  );
}

export default Bulksection;
