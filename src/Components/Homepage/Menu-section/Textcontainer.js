import React from "react";
import { Button, P, Title } from "../../Buttons";

function Textcontainer() {
  return (
    <div className="txt-content">
      <P>
        <span className="hr">
          <hr />
        </span>
        Fine dine at our restraunt
      </P>
      <Title primary>BEST RECIPES </Title>
      <Title primary>IN TWON</Title>
      <div className="pcontent">
        <P>
          All of the food served is prepared in our kitchen using our own
          recipes. We make gyros from the freshest and highest-quality lamb and
          chicken available, and every other ingredient we use in our dishes is
          equally fine and fresh.
        </P>
      </div>
      <Button>view menu</Button>
      <Button>call for reservation</Button>
    </div>
  );
}

export default Textcontainer;
