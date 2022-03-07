// lib
import { useEffect, useState } from 'react';

// custom components
import Navbar from './Navbar';
import Logotype from './Logotype';

// styles
import { Container } from './style';

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container scrolled={scrolled}>
      <div>
        <Logotype />
        <Navbar />
      </div>
    </Container>
  );
};

export default Menu;
