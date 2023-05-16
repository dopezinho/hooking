import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <h1>Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes"/>
      </form>
    </header>
  )
}

export default Header