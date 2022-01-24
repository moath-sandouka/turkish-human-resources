import React from "react";
import { Link } from "react-router-dom";
import AslanLogo from "../assets/images/UBC LOGO.png";
import BmLogo from "../assets/images/BM LOGO.png";
import IskurLogo from "../assets/images/iskur logo.png";
import UbcLogo from "../assets/images/UB İNSAN KAYNAKLARI.png";

const Header = () => {
  return (
    <nav className="navbar navbar-light pt-4 container-fluid">
      <div className="col-12 col-sm-12 col-md-112 w-100 d-flex flex-row justify-content-between align-middle ">
        <Link className="w-100" to="/ana-sayfa">
          <div className="w-100 d-flex flex-row justify-content-between align-middle flex-wrap">
            <div className="col-6 col-sm-6 col-md-2 header-hiring-company-img">
              <img src={UbcLogo} className="header-img w-100" alt="..." />
            </div>
            <div className="col-6 col-sm-6 col-md-2 header-hiring-company-img">
              <img src={IskurLogo} className="header-img w-100" alt="..." />
            </div>
            <div className="col-6 col-sm-6 col-md-2 header-hiring-company-img">
              <img src={AslanLogo} className="header-img w-100" alt="..." />
            </div>
            <div className="col-6 col-sm-6 col-md-2 header-hiring-company-img">
              <img src={BmLogo} className="header-img w-100" alt="..." />
            </div>
          </div>
        </Link>
      </div>
      <div className="container-fluid d-flex flex-row justify-content-between flex-wrap text-center align-items-center align-middle pt-1 pb-2 gold-background-color">
        <span className="font-weight-bold col-12 col-sm-3">
          Telefon: 0542 106 34 07
        </span>

        <span className="font-weight-bold col-12 col-sm-4">
          E-Posta: <a href="#">info@ubcinsankaynaklari.com</a>
        </span>

        <div className="col-12 col-sm-12 col-md-3 w-100 align-self-start mt-2 mb-2">
          <a
            className="btn btn-2 btn-2h login-btn w-100"
            href="https://stage.ubcinsankaynaklari.net"
          >
            <p className="login-button-text">Login</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
