import React from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Layout } from '../components/Layout'

export default () => {
  return <Layout title='Tus favoritos' subtitle='Aquí tienes las fotos que te han gustado'>
    <FavsWithQuery />
  </Layout>
}
