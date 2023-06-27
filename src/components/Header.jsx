import React from 'react'

const Header = ({search , setSearch}) => {
  return (
    <div className='topmost'>
        <header className='header'>
            <nav className='navbar'>
                <a href="/">
                  <div><span className='nav--header'>Anime</span><span className='nav--span'>Link</span></div>
                </a>
                <form>
                  <input type="text" className='user--input' placeholder='Search for an anime...' value={search}  onChange={e=>setSearch(e.target.value)}/>
                </form>
            </nav>
        </header>
    </div>
  )
}

export default Header