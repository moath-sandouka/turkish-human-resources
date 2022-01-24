import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container text-center pl-0 pr-0 header-links mt-5 ">
      <div
        className="default-grid pl-0 pr-0 pt-3 pb-3"
      >
        <Link to="/hakkimizda">HAKKIMIZDA</Link>
        <Link to="/hizmetlerimiz">HİZMETLERİMİZ</Link>
        <Link to="/is-basvurusu">İŞ BAŞVURUSU</Link>
        <Link to="/belgelerimiz">BELGELERİMİZ</Link>
        <Link to="/iletisim">İLETİŞİM</Link>
        <Link to="/kvkk">KVKK</Link>
      </div>
    </div>
  );
}

export default Navbar;
