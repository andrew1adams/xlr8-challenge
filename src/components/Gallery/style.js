import styled from 'styled-components';

export const Container = styled.div`
  max-width: 940px;
  margin: 0 auto;
  padding: 30px 0px;

  .boxes-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 10px 20px;
    justify-content: center;
  }

  @media (max-width: 980px) {
    max-width: 620px;

    .boxes-wrapper {
      grid-template-columns: repeat(2, 300px);
    }
  }

  @media (max-width: 680px) {
    max-width: 300px;

    .boxes-wrapper {
      grid-template-columns: repeat(1, 300px);
    }
  }
`;
