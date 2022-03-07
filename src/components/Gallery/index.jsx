// libs
import { useContext } from 'react';

// custom components
import Box from './Box';
import EmptyBox from './EmptyBox';

// context
import { ImageContext } from '../../context/imagesContext';

// styles
import { Container } from './style';

const Gallery = () => {
  const { data, isFiltered, filteredArray, alreadyExistsBooks } =
    useContext(ImageContext);

  return (
    <Container>
      <div className="boxes-wrapper">
        {!isFiltered ? (
          data.map((image) => <Box key={image.image_id} image={image} />)
        ) : alreadyExistsBooks ? (
          filteredArray.map((image) => (
            <Box key={image.image_id} image={image} />
          ))
        ) : (
          <EmptyBox />
        )}
      </div>
    </Container>
  );
};

export default Gallery;
