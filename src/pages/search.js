import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Search from '../components/search'

const SearchPage = () => {
  return (
    <Layout>
      <Head title="Search" />
      <Search></Search>
    </Layout>
  )
}

export default SearchPage
