import React from 'react'

const Sidebar = () => {
  const newTopAnime = [ {
    title:"Fullmetal Alchemist: Brotherhood",
    url:"https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
  } , {
    title:"Bleach: Sennen Kessen-hen",
    url:"https://myanimelist.net/anime/41467/Bleach__Sennen_Kessen-hen"
  } , {
    title:"Fullmetal Alchemist: Brotherhood",
    url:"https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
  } , {
    title:"Steins;Gate",
    url:"https://myanimelist.net/anime/9253/Steins_Gate"
  } , {
    title:"Gintama°",
    url:"https://myanimelist.net/anime/28977/Gintama%C2%B0"
  } , {
    title:"Kaguya-sama wa Kokurasetai: Ultra Romantic",
    url:"https://myanimelist.net/anime/43608/Kaguya-sama_wa_Kokurasetai__Ultra_Romantic"
  } , {
    title:"Hunter x Hunter (2011)",
    url:"https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011"
  } , {
    title:"Ginga Eiyuu Densetsu",
    url:"https://myanimelist.net/anime/820/Ginga_Eiyuu_Densetsu"
  }, {
    title:"Oshi no Ko",
    url:"https://myanimelist.net/anime/52034/Oshi_no_Ko"
  }]
  return (
    <aside>
        <div className="sidebar">
            <h1 className='sidebar--header'>Top Anime</h1>
            <ul className='sidebar--list'>
              {
                newTopAnime.map((anime, index) => {
                  return (
                    <li key={index} className='sidebar--list-item'>
                      <a href={anime.url} target='_blank' rel='noopener noreferrer'>{anime.title}</a>
                    </li>
                  )
                })
              }
            </ul>
        </div>
    </aside>
  ) }

export default Sidebar