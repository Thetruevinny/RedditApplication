import './App.css';
import React from 'react';
import Banner from '../features/Banner';
import Categories from '../features/Categories';
import Styles from '../Styles/App.module.css';
import CardList from '../features/CardList';

function App() {
  return (
    <div className={Styles.app}>
      <Banner />
      <Categories />
      <CardList />
    </div>
  );
};

export default App;
