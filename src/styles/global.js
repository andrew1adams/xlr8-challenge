import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    color: #2f323c;

    --primary-color: #11275a;
    --secondary-color: #24b7b2;

    --primary-color-op: #11275a55;
    --secondary-color-op: #24b7b2aa;

    --background : #f6f6ff;
  }

  * {
    margin: 0;  
    padding: 0;
    outline: none;
    box-sizing: border-box;
    transition: all 0.1s ease-in-out;
  }

  body {
    background: var(--background);
    width: 100vw;
    padding: 80px 0;
    overflow-x: hidden;

    ul li {
      list-style: none;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: var(--primary-color);

      :visited {
        color: var(--secondary-color);
      }
    }

    h1, h2, h3, strong, em {
      color: var(--primary-color);
    }

    svg {
      cursor: pointer;
    }

    @media (max-width: 680px) {
      padding: 60px 0;
    }
  }
`;
