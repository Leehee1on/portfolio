import React from "react";
import "../assets/css/header.css";
import { MenuOutlined } from "@ant-design/icons";
export default function Header() {
  const [state, setState] = React.useState(false);

  const onClickMenu = () => {
    if (window.innerWidth < 768) {
      setState(!state);
      if (window.innerWidth < 768) {
        let navMenu = document.getElementById("toggle-nav");
        if (!navMenu) throw new Error("HTML Error!");
        if (navMenu.className === "nav-menu") {
          navMenu.className += " responsive";
        } else {
          navMenu.className = "nav-menu";
        }
      }
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <span>&lt;</span>
          <a href="#">HeeWon Lee</a>
          <span>&nbsp;/&gt;</span>
        </div>
        <div className="toggle-nav" onClick={onClickMenu}>
          <MenuOutlined className="menu-icon" />
        </div>

        <div className={state ? "header-nav active" : "header-nav"}>
          {/* <a href="#Info">Info</a> */}
          <a href="#about" onClick={onClickMenu}>
            About
          </a>
          <a href="#skills" onClick={onClickMenu}>
            Skills
          </a>
          <a href="#project" onClick={onClickMenu}>
            Projects
          </a>
          <a href="#experience" onClick={onClickMenu}>
            Work experience
          </a>
          <a href="#contact" onClick={onClickMenu}>
            Contact
          </a>
        </div>
      </header>
      <div style={{ marginTop: 100 }} />
    </>
  );
}
