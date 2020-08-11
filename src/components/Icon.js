import React from "react";

const Icon = ({ icon, activeIcon, setActiveIcon }) => (
  <i
    onClick={() => setActiveIcon(icon)}
    className={icon}
    style={{ color: activeIcon === icon ? "red" : "" }}
  ></i>
);

export default Icon;
