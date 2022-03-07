// libs
import { IoIosChatbubbles } from 'react-icons/io';
import { Link } from 'react-router-dom';

// custom components
import FilterBookmark from '../FilterBookmark';
import GalleryIcon from '../GalleryIcon';

// styles
import { Container } from './style';

const Navbar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            <GalleryIcon />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FilterBookmark />
          </Link>
        </li>
        <li>
          <Link to="/thanks-for-the-opportunity">
            <IoIosChatbubbles size="32" />
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
