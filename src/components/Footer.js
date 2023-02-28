import React from "react";

export default function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer p">Copyright © {fullYear}</p>
    </footer>
  );
}
