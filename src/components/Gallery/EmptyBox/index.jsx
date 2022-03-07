// custom components
import { Paper } from '../../';

// styles
import { Container } from './style';

// assets
import image from '../../../assets/empty.jpg';
import { ImageContext } from '../../../context/imagesContext';
import { useContext } from 'react';

const EmptyBox = () => {
  const { language } = useContext(ImageContext);

  return (
    <Container>
      <Paper>
        <h2>
          {language === 'EN'
            ? 'Sorry, no cards marked.'
            : 'Desculpe, não há cartões marcados.'}
        </h2>
        <img src={image} alt="Without cards" />
      </Paper>
    </Container>
  );
};

export default EmptyBox;
