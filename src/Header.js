import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
          alt=""
        />
      </div>
      <div className="header_middle"></div>
      <div className="header_right"></div>
    </div>
  );
}

export default Header;
