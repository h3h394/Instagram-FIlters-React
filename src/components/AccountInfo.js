/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PhoneBg from "../phoneBg.jpeg";

const AccountInfo = () => {
  return (
    <div css={styles} className="accountInfo">
      <a
        href="https://www.instagram.com/h3webdevtuts/"
        target="_blank"
        rel="noopener noreferrer"
        className="accountImg"
      >
        <img src={PhoneBg} alt="user" />
        <p>h3webdevtuts</p>
      </a>
      <i className="fa fa-ellipsis-h"></i>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 0 0 14px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #181629;
  .accountImg {
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }
    p {
      font-size: 14px;
      font-weight: bold;
      padding-bottom: 2px;
    }
  }
  p,
  i {
    color: #fff;
  }
  i {
    cursor: pointer;
  }
`;

export default AccountInfo;
