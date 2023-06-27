import React from 'react'
import Main from './Main';
const SearchMain = ({ animeList }) => {
    if(!animeList){
        return <div className='loading--text'>
            <div> Anime Not Found , Search For Something Else or Refresh </div>
        </div>
    }
    else{
    return (
      <div>
        {animeList.length>0 && animeList.map((anime, index) => {
          return (
            <a href={anime.url}>
                <div key={index} className='main--animecard'>
                  <h3 className='main--animecard--header'>{anime.title}</h3>
                  <img src={anime.images.jpg.image_url} alt="anime image" />
                  <h4>Score : {anime.score}</h4>
                  <h4>Rank : {anime.rank}</h4>
                </div>
            </a>
          );
        })}
      </div>
    );}
  };
export default SearchMain