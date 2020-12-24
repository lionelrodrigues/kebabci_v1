import React from "react";
import { P, Title } from "../../Buttons";
import Bounce from "react-reveal/LightSpeed";

function Subdata() {
  return (
    <div className="subdiv">
      <Bounce right>
        <Title className="sub-titile">KEBABÇÏ DISCRIPTION</Title>
      </Bounce>
      <P>
        Culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptartem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt
        explicabo
      </P>
    </div>
  );
}

export default Subdata;
