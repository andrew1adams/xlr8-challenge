import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  margin: 50px auto 0;
  padding: 50px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: Pointer;
  position: relative;
  max-width: 500px;

  :hover {
    transform: scale(1.1);
  }

  @media (max-width: 680px) {
    max-width: 300px;
    padding: 30px 20px;

    :hover {
      transform: none;
    }
  }
`;
