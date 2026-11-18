import styled from "styled-components";

export const MarqueeContainer = styled.div`
  position: relative;
  z-index: 3;
  overflow: hidden;
  padding-block: 1.1rem;
  background: ${({ theme }) => theme.colors.titleColor};
  color: #101012;
  transform: rotate(-1.5deg);
  margin-inline: -2rem;

  .track {
    display: flex;
    width: max-content;
    will-change: transform;
  }

  .group { display: flex; }

  span {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    padding-right: 2rem;
    font-family: "Syne", "Poppins", sans-serif;
    font-weight: 800;
    font-size: clamp(1.6rem, 4.2vw, 3.2rem);
    letter-spacing: -.01em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  i {
    font-style: normal;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;
