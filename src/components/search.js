import React from 'react'
import { HiSearch } from 'react-icons/hi'
import {
  Highlight,
  Hits,
  Index,
  InstantSearch,
  SearchBox,
  useInstantSearch,
} from 'react-instantsearch-hooks-web'

import algoliasearch from 'algoliasearch/lite'

import transformType from '../utils/typeTransformer'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

function Hit({ hit }) {
  const pathSegment = transformType(hit.type)

  return (
    <a href={`/${pathSegment}/${hit.slug}`}>
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
    <div className="search">
      {/* polyfill for IE 11 */}
      <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CArray.prototype.find%2CArray.prototype.includes%2CPromise%2CObject.assign%2CObject.entries"></script>
      <InstantSearch searchClient={searchClient} indexName="Figures">
        <div className="flex">
          <HiSearch className="search-icon" />
          <SearchBox placeholder="Search" />
        </div>
        <EmptyQueryBoundary fallback={null}>
          <Index indexName="Figures">
            <Hits hitComponent={Hit} />
          </Index>
          <Index indexName="Sites">
            <Hits hitComponent={Hit} />
          </Index>
          <Index indexName="Interviews">
            <Hits hitComponent={Hit} />
          </Index>
        </EmptyQueryBoundary>
      </InstantSearch>
    </div>
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
