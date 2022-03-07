import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import Home from './Home';
import ThanksForThat from './ThanksForThat';

export const Main = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thanks-for-the-opportunity" element={<ThanksForThat />} />
      </Routes>
    </>
  );
};
