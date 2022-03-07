// libs
import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// custom components
import App from './App';

// context
import { ProviderImageContext } from './context/imagesContext';

render(
  <ProviderImageContext>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ProviderImageContext>,
  document.getElementById('root')
);
