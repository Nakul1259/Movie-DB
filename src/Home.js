import React from 'react'
import { useGlobalContext } from './Context'
import Movies from './Movies'
import SearchForm from './SearchForm'

function Home() {
  return (
    <main>
    <h1 className="title">Search Movies</h1>
    <SearchForm />
    <Movies />
    </main>
    )
}

export default Home