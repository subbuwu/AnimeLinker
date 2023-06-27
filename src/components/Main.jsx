import React from 'react';

const Main = ({ animeList }) => {
  if(!animeList){
    return <div>Loading....</div>
  }
  else{
  return (
    <div>
      {animeList.map((anime, index) => {
        return (
          <a href={anime.url}>
            <div key={index} className='main--animecard'>
              <h3 className='main--animecard--header'>{anime.title}</h3>
              <img src={anime.images.jpg.image_url} alt="anime image" />
              <div>
                <h4>Score : {anime.score}</h4>
                <h4>Rank : {anime.rank}</h4>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );}
};

export default Main;
