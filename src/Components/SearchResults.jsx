import React, { useEffect, useState } from 'react'
import { func, number } from 'prop-types'

import { loginDb, getAndIncrement } from '../utils/viewsDb'
import fetchResults from '../utils/fetchResults'
import './SearchResults.css'
import ResultsList from './ResultsList'
import CarModal from './CarModal'

const SearchResults = ({ startPrice, endPrice, onDone }) => {
  const [items, setItems] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [pageNum, setPageNum] = useState(1)
  const [maxPages, setMaxPages] = useState(0)
  const [itemToView, setItemToView] = useState(null)
  const [viewCount, setViewCount] = useState(null)

  useEffect(() => {
    const getResults = async () => {
      await loginDb()
      const { results, totalCount } = await fetchResults(
        startPrice,
        endPrice,
        pageNum
      )
      setMaxPages(totalCount / 20)
      setItems(results)
    }

    getResults()
  }, [pageNum])

  const onSelect = async (item) => {
    const newRecord = await getAndIncrement(item.vin)
    setViewCount(newRecord.viewCount)
    setItemToView(item)
  }

  const incrementPage = () => {
    setPageNum((prev) => prev + 1)
  }

  const decrementPage = () => {
    setPageNum((prev) => prev - 1)
  }

  return (
    <div className="ResultsPage">
      <h2>Search Results</h2>
      <div className="Range">
        <div>Start: {startPrice}</div>
        <div>End: {endPrice}</div>
      </div>
      Click an entry to view details
      <button type="button" disabled={pageNum === 1} onClick={decrementPage}>
        Previous cars
      </button>
      <ResultsList items={items} onClick={onSelect} />
      <button
        type="button"
        disabled={pageNum === maxPages}
        onClick={incrementPage}
      >
        Next cars
      </button>
      <button type="submit" onClick={onDone}>
        Search again
      </button>
      {itemToView && (
        <CarModal
          itemToView={itemToView}
          viewCount={viewCount}
          onClose={() => setItemToView(null)}
        />
      )}
    </div>
  )
}

SearchResults.propTypes = {
  onDone: func.isRequired,
  startPrice: number.isRequired,
  endPrice: number.isRequired,
}

export default SearchResults
