/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "./Button";

const ButtonContainer = ({ filter, setFilter }) => {
  return (
    <div className="buttonContainer" css={styles}>
      <Button btnText="Clear" filter={filter} setFilter={setFilter} />
      <Button btnText="Sepia" filter={filter} setFilter={setFilter} />
      <Button btnText="Saturate" filter={filter} setFilter={setFilter} />
      <Button btnText="Xpro" filter={filter} setFilter={setFilter} />
      <Button btnText="Willow" filter={filter} setFilter={setFilter} />
      <Button btnText="Walden" filter={filter} setFilter={setFilter} />
      <Button btnText="Toaster" filter={filter} setFilter={setFilter} />
      <Button btnText="Sutro" filter={filter} setFilter={setFilter} />
      <Button btnText="LoFi" filter={filter} setFilter={setFilter} />
      <Button btnText="Hue" filter={filter} setFilter={setFilter} />
      <Button btnText="Flip" filter={filter} setFilter={setFilter} />
      <Button btnText="Crazy" filter={filter} setFilter={setFilter} />
    </div>
  );
};

const styles = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default ButtonContainer;
