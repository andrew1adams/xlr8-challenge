// libs
import React from 'react';
import { AiFillSignal } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// styles
import { Container } from './style';

const Logotype = () => {
  return (
    <Link to="/">
      <Container>
        <AiFillSignal
          color="var(--secondary-color)"
          className="icon"
          size="2.45rem"
        />
        XLR8<span>RMS</span>
      </Container>
    </Link>
  );
};

export default Logotype;
