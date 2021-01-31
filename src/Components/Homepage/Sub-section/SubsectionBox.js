import React from "react";
const Subsectionbox1 = () => {
  return (
    <div className="subsection-box" id="#contact">
      <img src="/images/contact_us.svg" alt="contact"></img>
      <h3>Contact us</h3>
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
      <h3>Our philosophy</h3>
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
      <img src="/images/menu.svg" alt="menu"></img>
      <h3>Download menu</h3>
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
