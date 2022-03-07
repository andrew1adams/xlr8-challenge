import React, { useContext } from 'react';
import { IoMdPhotos } from 'react-icons/io';
import { ImageContext } from '../../../context/imagesContext';

const GalleryIcon = () => {
  const { setIsFiltered } = useContext(ImageContext);

  return (
    <IoMdPhotos
      onClick={() => setIsFiltered(false)}
      size="32"
      color="var(--primary-color)"
    />
  );
};

export default GalleryIcon;
