// styles
import { Container } from './style';

const Paper = ({ children, setLanguage = () => {} }) => {
  return (
    <Container
      onClick={() => setLanguage((prev) => (prev === 'PT' ? 'EN' : 'PT'))}
    >
      {children}
    </Container>
  );
};

export default Paper;
