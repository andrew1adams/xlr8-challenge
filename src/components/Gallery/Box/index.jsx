// libs
import React, { memo, useContext } from 'react';
import { IoBookmark } from 'react-icons/io5';

// context
import { ImageContext } from '../../../context/imagesContext';

// styles
import { Container } from './style';

const Box = ({ image }) => {
  const { setData } = useContext(ImageContext);

  return (
    <Container
      onClick={() =>
        setData((prev) =>
          prev.map((card) => {
            if (card.image_id === image.image_id) {
              return {
                ...image,
                marked: !image.marked,
              };
            }

            return card;
          })
        )
      }
      marked={image.marked}
      url={image.url}
    >
      <IoBookmark className="icon" size="36" />
      <div>
        <p>{image.title}</p>
      </div>
    </Container>
  );
};

export default memo(Box);
