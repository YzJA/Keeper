import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>YJA Tech ⓒ {year}.</p>
    </footer>
  );
};

export default Footer;
