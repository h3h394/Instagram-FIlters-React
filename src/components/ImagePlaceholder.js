/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PhoneBg from "../phoneBg.jpeg";

const ImagePlaceholder = ({ filter, placeholderImg }) => (
  <div
    css={styles}
    style={{
      background: placeholderImg
        ? `url(${placeholderImg}) no-repeat center/cover`
        : `url(${PhoneBg}) no-repeat center/cover`,
    }}
    className={`imagePlaceholder ${filter}`}
  ></div>
);

const styles = css`
  width: 100%;
  height: 260px;
  &.sepia {
    filter: sepia(1);
  }
  &.saturate {
    filter: saturate(8);
  }
  &.xpro {
    filter: contrast(1.3) brightness(0.8) sepia(0.3) saturate(1.5)
      hue-rotate(-20deg);
  }
  &.willow {
    filter: saturate(0.02) contrast(0.85) brightness(1.2) sepia(0.02);
  }
  &.walden {
    filter: sepia(0.35) contrast(0.9) brightness(1.1) hue-rotate(-10deg)
      saturate(1.5);
  }
  &.toaster {
    -webkit-filter: sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);
    filter: sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);
  }
  &.sutro {
    filter: brightness(0.75) contrast(1.3) sepia(0.5) hue-rotate(-25deg);
  }
  &.lofi {
    filter: contrast(1.4) brightness(0.9) sepia(0.05);
  }
  &.hue {
    filter: hue-rotate(220deg);
  }
  &.flip {
    transform: scaleX(-1);
  }
  &.crazy {
    filter: blur(2px) grayscale(0.5) opacity(0.8) hue-rotate(120deg);
  }
`;

export default ImagePlaceholder;
