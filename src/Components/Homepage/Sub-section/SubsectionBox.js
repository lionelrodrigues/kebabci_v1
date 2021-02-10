import React from "react";
const Subsectionbox1 = () => {
  return (
    <div className="subsection-box" id="#contact">
      <img src="/images/ingredients.svg" alt="contact"></img>
      <h3>Fresh ingredients</h3>
      <p>
        We are committed to improving the way we cook our quality food and the
        Fresh ingredients that go into it. the vegetables and meat we use in the
        Kitchen are freshly bought everyday.
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
        Kebabci menu uses authentic ingredients and cooking methods. Nearly 20
        different spices are used to craft our dishes. We have pulled together
        some of our favorite recipes. Our recipes are world heritage.
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
        There's always some party going on that requires feeding the masses.
        Birthdays, baptisms, block parties, reunions...you name it, we cook for
        it!
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
