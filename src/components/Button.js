/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnText, filter, setFilter }) => (
  <button
    className={filter === btnText.toLowerCase() && "activeBtn"}
    onClick={() => setFilter(btnText.toLowerCase())}
    css={styles}
  >
    {btnText}
  </button>
);

const styles = css`
  display: inline-block;
  border: none;
  outline: none;
  text-align: center;
  width: 140px;
  padding: 12px;
  color: #f1f1f1;
  background: #2c2747;
  cursor: pointer;
  font-size: 24px;
  transition: all 400ms ease-in-out;
  margin: 8px 0;
  &.activeBtn {
    background: #19162a;
  }
  @media (max-width: 689px) {
    width: 30%;
  }
  @media (min-width: 690px) and (max-width: 860px) {
    width: 47%;
  }
`;

export default Button;
