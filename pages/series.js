import React from 'react'
import ListMovies from '@/components/ListMovies/ListMovies'
import Layout from './layout'

const Series = () => {
  return (
    <Layout>
      <ListMovies type="series" />
    </Layout>
  )
}

export default Series
