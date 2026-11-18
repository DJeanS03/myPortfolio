import styled from "styled-components";

export const HorizontalScrollContainer = styled.div`
  position: relative;

  .track {
    display: grid;
    gap: 1.4rem;
    width: min(1180px, calc(100% - 3rem));
    margin-inline: auto;
  }

  &.is-pinned .pin {
    position: sticky;
    top: 0;
    height: 100svh;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  &.is-pinned .track {
    display: flex;
    width: max-content;
    margin-inline: 0;
    gap: 1.6rem;
    padding-inline: max(1.5rem, calc((100vw - 1180px) / 2)) 12vw;
    padding-top: 3rem;
    will-change: transform;
  }

  &.is-pinned .track > * {
    flex: 0 0 min(1040px, 80vw);
  }
`;
