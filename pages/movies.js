import React from 'react'
import ListMovies from '@/components/ListMovies/ListMovies'
import Layout from './layout'

const Movies = () => {
  return (
    <Layout>
      <ListMovies type="movies" />
    </Layout>
  )
}

export default Movies
