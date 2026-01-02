import styled from "styled-components";

export const AboutContainer = styled.section`
  padding-block: 5rem 2rem;

  .about__container {
    row-gap: 2.5rem;
    align-items: start;
  }

  .about__data {
    text-align: left;
  }

  .about__description {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .about__description ul {
    margin: 1rem 0 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.5rem;
  }

  .about__description li {
    list-style: disc;
  }

  .about__cta {
    display: flex;
    justify-content: flex-start;
  }

  .about__expertise {
    justify-self: center;
  }

  @media screen and (max-width: 464px) {
    .about__container {
      display: flex;
      flex-direction: column;
    }

    .about__data {
      text-align: center;
    }

    .about__description ul {
      text-align: left; /* lista continua legível no mobile */
    }

    .about__cta {
      justify-content: center;
    }
  }
`;
