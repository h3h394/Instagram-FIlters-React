/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PhoneHeading from "./PhoneHeading";
import AccountInfo from "./AccountInfo";
import ImagePlaceholder from "./ImagePlaceholder";
import SocialIcons from "./SocialIcons";

const Phone = ({ filter, placeholderImg }) => {
  return (
    <div className="phone" css={styles}>
      <PhoneHeading />
      <div className="phoneContainer">
        <AccountInfo />
        <ImagePlaceholder filter={filter} placeholderImg={placeholderImg} />
        <SocialIcons />
      </div>
      <div className="homeBtn">
        <div className="square"></div>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 320px;
  height: 560px;
  background: #181629;
  border: 3px solid #f1f1f1;
  border-radius: 30px;
  box-shadow: 13px 13px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  .phoneContainer {
    width: 100%;
    max-width: 90%;
    padding: 18px 0;
    margin: 0 auto;
  }
  .homeBtn {
    margin: 0 auto;
    cursor: pointer;
    background: #f9f8f8;
    width: 50px;
    height: 50px;
    border: solid 1px #9a9a9a;
    border-radius: 50%;
    box-shadow: inset 0px 5px 10px #bdbdbd;
    display: flex;
    .square {
      margin: auto;
      width: 18px;
      height: 18px;
      border-radius: 5px;
      border: solid 2px #999898;
    }
  }
  @media (max-width: 689px) {
    margin: 20px auto 0 auto;
  }
`;

export default Phone;
