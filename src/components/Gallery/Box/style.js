import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 272px;
  background: url(${({ url }) => url}) no-repeat center center;
  background-size: cover;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.025);

    @media (max-width: 768px) {
      transform: none;
    }
  }

  div {
    position: relative;
    padding: 10px 0;
    width: 80%;

    :before {
      content: '';
      width: ${({ marked }) => (marked ? 'calc(100% + 45px)' : '0px')};
      height: 100%;
      background: var(--background);
      position: absolute;
      top: 0;
      left: -25px;
      z-index: 10;
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
      border-radius: 0 8px 8px 0;
      transition: all 0.2s ease-in-out;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-weight: bold;
      color: ${({ marked }) =>
        marked ? 'var(--primary-color)' : 'var(--secondary-color)'};
      position: relative;
      z-index: 100;
    }
  }

  .icon {
    position: absolute;
    top: -5px;
    left: 14px;
    ${({ marked }) =>
      marked
        ? css`
            fill: var(--primary-color);
            transform: scaleY(1.5);
            top: 3px;
          `
        : css`
            fill: var(--secondary-color);
          `}
  }
`;
