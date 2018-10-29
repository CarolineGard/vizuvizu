import React from "react";

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  paddingBottom: "5px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
};

const phantom = {
  display: "block",
  padding: "20px",
  height: "60px",
  width: "100%",
};

const Footer = () => (
  <div>
    <div style={phantom} />
    <div style={style}>
      <p>Copyright 2018</p>
    </div>
  </div>
);

export default Footer;
