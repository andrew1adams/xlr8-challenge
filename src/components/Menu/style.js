import styled, { css } from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 80px;
  background: var(--background);
  position: fixed;
  z-index: 1000;
  left: 0;
  transition: all 0.5s ease-in-out;

  ${({ scrolled }) =>
    scrolled
      ? css`
          bottom: 0;
          transform: translateY(0px);
          box-shadow: 0 -2px 0px rgba(0, 0, 0, 0.2);
        `
      : css`
          top: -60px;
          transform: translateY(60px);
          box-shadow: 0 2px 0px rgba(0, 0, 0, 0.2);
        `}
  > div {
    padding: 10px 0;
    margin: 0 auto;
    max-width: 940px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 980px) {
      max-width: 620px;
    }
  }

  @media (max-width: 680px) {
    height: 60px;

    > div {
      max-width: 300px;
    }
  }
`;
