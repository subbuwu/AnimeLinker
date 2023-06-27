import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import SearchMain from './components/SearchMain';

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  // const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false);

  // const fetchTopAnime = async () => {
  //   const res = await fetch('https://api.jikan.moe/v4/top/anime');
  //   const tempData = await res.json();
  //   setTopAnime(tempData.data);
  // };

  const fetchDOMAnime = async () => {
    const res = await fetch('https://api.jikan.moe/v4/anime');
    const tempData = await res.json();
    setAnimeList(tempData.data);

  };

  const searchFetchAnime = async (searchValue) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${searchValue}`);
    const tempData = await res.json();
    setAnimeList(tempData.data);
    setFlag(true);
  };

  useEffect(() => {
    if (search !== "") {
      searchFetchAnime(search);
    } else {
      fetchDOMAnime();
    }
  }, [search]);

  return (
    <div className="container">
      <Header search={search} setSearch={setSearch} />
      <div className="container-flex">
        <Sidebar/>
        <div className="main--wrapper">
          <div className="main--card--container">
            {flag === false ? (
              <Main animeList={animeList} />
            ) : (
              <SearchMain animeList={animeList} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
