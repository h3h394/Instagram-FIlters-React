/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const PhoneHeading = () => (
  <div css={styles} className="phoneHeading">
    <i className="fab fa-instagram"></i>
    Instagram
  </div>
);

const styles = css`
  width: 100%;
  padding: 12px 18px;
  background: #fafafa;
  border-bottom: 1px solid #ccc;
  font-size: 24px;
  i {
    margin-right: 5px;
  }
`;

export default PhoneHeading;
