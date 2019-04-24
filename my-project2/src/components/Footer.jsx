import React from "react";

const Footer = props => {
  return (
    <>
      {props.show && (
        <div className="footer">
          <a href="https://iexcloud.io">Powered by IEX Cloud</a>
        </div>
      )}
    </>
  );
};

export default Footer;
