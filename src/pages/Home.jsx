import React from 'react'
import CocktailList from '../components/CocktailList.jsx'
import Navbar from '../components/Navbar.jsx'
import SearchForm from '../components/SearchForm.jsx'

export default function Home() {
  return (
    <main>
      <Navbar
      Home="Home"
      About="About"
      SearchForm={<SearchForm/>}/>
      <CocktailList />
    </main>
  )
}
