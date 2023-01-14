import React from 'react'

import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
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
      <div>
        <h4>
          <Highlight attribute="title" hit={hit} />
        </h4>
        <p>
          <Highlight attribute="designation" hit={hit} />
        </p>
        <em>
          <Highlight attribute="brief" hit={hit} />
        </em>
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
        <SearchBox />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </>
  )
}

export default Search
