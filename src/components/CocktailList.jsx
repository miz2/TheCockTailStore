import React from 'react'
import Cocktail from './Cocktail.jsx'
import Loading from './Loading.jsx'
import { useGlobalContext } from '../context.jsx'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='section-title nothing'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails available !!</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
