/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Icon from "./Icon";

const SocialIcons = () => {
  const [activeIcon, setActiveIcon] = useState("");

  return (
    <div className="socialIcons" css={styles}>
      <div className="icons">
        <Icon
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
          icon="far fa-heart fa-lg"
        />
        <Icon
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
          icon="far fa-comment fa-lg"
        />
        <Icon
          activeIcon={activeIcon}
          setActiveIcon={setActiveIcon}
          icon="far fa-paper-plane fa-lg"
        />
      </div>
      <Icon
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        icon="far fa-bookmark fa-lg"
      />
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    cursor: pointer;
    color: #fff;
  }
  .icons {
    i {
      margin-right: 10px;
    }
  }
`;

export default SocialIcons;
