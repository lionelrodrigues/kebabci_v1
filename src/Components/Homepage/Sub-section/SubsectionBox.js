import React from "react";
const Subsectionbox1 = () => {
  return (
    <div className="subsection-box" id="#contact">
      <img src="/images/ingredients.svg" alt="contact"></img>
      <h3>Fresh ingredients</h3>
      <p>
        Change is good, especially when it means adding new dishes to our menu.
        Culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptartem accusantium
        doloremque,
      </p>
    </div>
  );
};
const Subsectionbox2 = () => {
  return (
    <div className="subsection-box">
      <img src="/images/skewer.svg" alt="skwer" />
      <h3>authentic recepies</h3>
      <p>
        Change is good, especially when it means adding new dishes to our menu.
        Culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptartem accusantium
        doloremque
      </p>
    </div>
  );
};
const Subsectionbox3 = () => {
  return (
    <div className="subsection-box">
      <img src="/images/group.svg" alt="menu"></img>
      <h3>Perfect for groups</h3>
      <p>
        Change is good, especially when it means adding new dishes to our menu.
        Culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptartem accusantium
        doloremque
      </p>
    </div>
  );
};
function SubsectionBox() {
  return (
    <>
      <Subsectionbox1 />
      <Subsectionbox2 />
      <Subsectionbox3 />
    </>
  );
}

export default SubsectionBox;
