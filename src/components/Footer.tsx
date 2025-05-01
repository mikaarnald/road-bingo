import React from "react";
import "../i18n";
import "./Footer.css";
import classNames from "classnames";

const Footer: React.FC<{ className?: string; videoListUrl?: string }> = ({
  className,
}) => {

  return (
    <footer className={classNames("Footer", className)}>
      <ul>
        <li>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
