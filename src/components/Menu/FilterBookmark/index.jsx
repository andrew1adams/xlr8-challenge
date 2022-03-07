// libs
import { useContext } from 'react';
import { IoBookmarks } from 'react-icons/io5';
import { RiFilter2Fill } from 'react-icons/ri';

//context
import { ImageContext } from '../../../context/imagesContext';

// styles
import { Container } from './style';

const FilterBookmark = () => {
  const { setIsFiltered } = useContext(ImageContext);

  return (
    <Container onClick={() => setIsFiltered(true)}>
      <IoBookmarks size="32" color="var(--primary-color)" />
      <RiFilter2Fill
        size="16"
        color="var(--secondary-color)"
        className="aux-icon"
      />
    </Container>
  );
};

export default FilterBookmark;
