import { css } from "@emotion/css";

export const base = css`
  display: inline-flex;
  align-items: center;

  &.onlyIcon {
    width: fit-content !important;
    height: fit-content;
    padding: 0;
    border: none;
  }

  &.fit {
    width: fit-content !important;
    height: fit-content;
  }
`;
