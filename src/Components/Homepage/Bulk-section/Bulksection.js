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
            We provide bulk ordering services to Companies and startups. We
            service office catering and house parties.There's always some party
            going on that requires feeding the masses. Birthdays, baptisms,
            block parties, reunions...you name it, we cook for it with express
            delivery!. To know more about bulk-ordering menu and its terms and
            conditions click below.
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
