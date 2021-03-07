import React, { useState } from 'react'
import SearchResults from './SearchResults'
import SearchPage from './SearchPage'

const SEARCH_PAGE = 0
const SEARCH_RESULTS = 1

const StartPage = () => {
  const [page, setPage] = useState(SEARCH_PAGE)
  const [startPrice, setStartPrice] = useState(0)
  const [endPrice, setEndPrice] = useState(0)

  const setStartAndEnd = (start, end) => {
    setStartPrice(start)
    setEndPrice(end)
    setPage(SEARCH_RESULTS)
  }

  return page === SEARCH_PAGE ? (
    <SearchPage onSubmit={setStartAndEnd} />
  ) : (
    <SearchResults
      startPrice={startPrice}
      endPrice={endPrice}
      onDone={() => setPage(SEARCH_PAGE)}
    />
  )
}

export default StartPage
