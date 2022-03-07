// libs
import { useEffect, useState } from 'react';
import { createContext } from 'react';

// data
import api from '../data/images.json';

const defaultValue = {
  filteredArray: [],
  setFilteredArray: () => {},
  data: api.map((prev) => ({ ...prev, marked: false })),
  setData: () => {},
  isFiltered: false,
  setIsFiltered: () => {},
  language: 'EN',
  setLanguage: () => {},
};

const ImageContext = createContext(defaultValue);

const ProviderImageContext = ({ children }) => {
  const [filteredArray, setFilteredArray] = useState(
    defaultValue.filteredArray
  );
  const [data, setData] = useState(defaultValue.data);
  const [isFiltered, setIsFiltered] = useState(defaultValue.isFiltered);
  const alreadyExistsBooks = filteredArray.length !== 0;
  const [language, setLanguage] = useState(defaultValue.language);

  useEffect(() => {
    setFilteredArray(data.filter((card) => card.marked));
  }, [data]);

  return (
    <ImageContext.Provider
      value={{
        filteredArray,
        setFilteredArray,
        data,
        setData,
        isFiltered,
        setIsFiltered,
        alreadyExistsBooks,
        language,
        setLanguage,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export { ImageContext, ProviderImageContext };
