import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { Button, Title, P } from "../../Buttons";
import "./Bulksection.css";

function Bulksection() {
  return (
    <div className="bulk-section">
      <div className="inner-container">
        <div className="container-header">
          <Title primary>
            HAVING A PARTY?
            <div className="border" />
            TRY OUR BULK MENU
          </Title>
        </div>
        <div className="container-paragraph">
          <P>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containin
          </P>
        </div>
        <NavHashLink
          to="route"
          smooth
          id="bulk-order"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://drive.google.com/file/d/1rxPBH68TKZyVbKJs_ProzoOU_gQOEdC0/view?usp=sharing"
            );
          }}
        >
          <Button primary>Bulk-order Menu</Button>
        </NavHashLink>
      </div>
    </div>
  );
}

export default Bulksection;
