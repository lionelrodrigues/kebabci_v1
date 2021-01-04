import React from "react";
import "../bulk-components/imageTitle.css";

function Bulkhero() {
  return (
    <div className="bulk-hero">
      <div className="textdiv">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          porta dictum turpis, eu mollis justo gravida ac. Proin non eros
          blandit, rutrum est a, cursus quam.
        </p>
      </div>
      <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
        <source
          src="https://player.vimeo.com/external/420603390.sd.mp4?s=640b1595e18d4c0ff84338ef61f3adeebf34a20a&profile_id=139&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default Bulkhero;
