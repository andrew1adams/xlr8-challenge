import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 32px;
  height: 32px;

  .aux-icon {
    position: absolute;
    bottom: -5px;
    left: -5px;
    border-radius: 4px;
    background: var(--background);
  }
`;
