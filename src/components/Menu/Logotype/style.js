import styled from 'styled-components';

export const Container = styled.h1`
  font-weight: 800;
  position: relative;
  padding-left: 2.4rem;
  font-size: 3rem;
  color: var(--primary-color);
  cursor: pointer;

  span {
    font-size: 1.8rem;
    color: var(--secondary-color);
  }

  .icon {
    position: absolute;
    bottom: 9px;
    left: 0;
  }

  @media (max-width: 680px) {
    font-size: 2rem;
    padding-left: 1.6rem;

    span {
      font-size: 1.2rem;
    }

    .icon {
      bottom: 0px;
      width: 1.6rem;
    }
  }
`;
