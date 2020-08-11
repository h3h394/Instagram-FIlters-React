/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import "./App.css";
import ImageUrl from "./components/ImageUrl";
import ButtonContainer from "./components/ButtonContainer";
import Phone from "./components/Phone";

const App = () => {
  const [filter, setFilter] = useState("clear");
  const [placeholderImg, setPlaceholderImg] = useState("");

  return (
    <section className="hero" css={styles}>
      <div className="container">
        <div className="controlsContainer">
          <ImageUrl
            placeholderImg={placeholderImg}
            setPlaceholderImg={setPlaceholderImg}
          />
          <ButtonContainer filter={filter} setFilter={setFilter} />
        </div>
        <Phone filter={filter} placeholderImg={placeholderImg} />
      </div>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    35deg,
    rgba(86, 76, 132, 1) -30%,
    rgba(12, 11, 23, 1) 100%
  );
  display: flex;
  .container {
    width: 100%;
    max-width: 1060px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    .controlsContainer {
      width: 100%;
      max-width: 620px;
    }
  }
  @media (max-width: 689px) {
    .container {
      flex-direction: column;
      margin: 18px auto;
    }
  }
  @media (min-width: 690px) and (max-width: 860px) {
    .container {
      .controlsContainer {
        max-width: 47%;
      }
    }
  }
  @media (min-width: 861px) and (max-width: 1032px) {
    .container {
      max-width: 810px;
      .controlsContainer {
        max-width: 464px;
      }
    }
  }
  @media (max-width: 1120px) {
    .container {
      max-width: 94%;
    }
  }
`;

export default App;
