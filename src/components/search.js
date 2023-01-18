import React from 'react'
import { HiSearch } from 'react-icons/hi'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  useInstantSearch,
} from 'react-instantsearch-hooks-web'

import algoliasearch from 'algoliasearch/lite'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

function Hit({ hit }) {
  let path = ''

  if (hit.type === 'ContentfulHistoricalSite') {
    path = 'historical-sites'
  } else if (hit.type === 'ContentfulHistoricalFigure') {
    path = 'historical-figures'
  } else if (hit.type === 'ContentfulInterview') {
    path = 'oral-histories'
  }

  return (
    <a href={`/${path}/${hit.slug}`}>
      <div className="hit-title">
        <Highlight attribute="title" hit={hit} />
      </div>
      <div className="hit-details">
        <div>
          <Highlight attribute="designation" hit={hit} />
        </div>
        <div>
          <Highlight attribute="brief" hit={hit} />
        </div>
      </div>
    </a>
  )
}

const Search = () => {
  return (
    <>
      {/* polyfill for IE 11 */}
      <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries"></script>
      <InstantSearch searchClient={searchClient} indexName="Figures">
        <div className="flex">
          <HiSearch className="search-icon" />
          <SearchBox placeholder="Search" />
        </div>
        <EmptyQueryBoundary fallback={null}>
          <Hits hitComponent={Hit} />
        </EmptyQueryBoundary>
      </InstantSearch>
    </>
  )
}

function EmptyQueryBoundary({ children, fallback }) {
  const { indexUiState } = useInstantSearch()

  if (!indexUiState.query) {
    return fallback
  }

  return children
}

export default Search
