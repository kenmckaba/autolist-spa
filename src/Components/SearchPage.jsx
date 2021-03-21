import React, { useState } from 'react'
import { func, number } from 'prop-types'
import './SearchPage.css'

const SearchPage = ({ startPrice, endPrice, onSubmit }) => {
  const [startPriceLocal, setStartPriceLocal] = useState(startPrice)
  const [endPriceLocal, setEndPriceLocal] = useState(endPrice)

  const submit = () => {
    onSubmit(startPriceLocal, endPriceLocal)
  }

  return (
    <div className="SearchPage">
      <h1>Car Gurus AutoList Car Finder</h1>
      <h2>Enter a price range to search</h2>
      <div className="inputs">
        <div>
          <input
            value={startPriceLocal}
            onChange={(e) => setStartPriceLocal(Number(e.target.value))}
            type="text"
            placeholder="Start range"
          />
        </div>
        <div>
          <input
            value={endPrice}
            onChange={(e) => setEndPriceLocal(Number(e.target.value))}
            type="text"
            placeholder="End range"
          />
        </div>
      </div>
      <button type="submit" onClick={submit}>
        Search
      </button>
    </div>
  )
}

SearchPage.propTypes = {
  startPrice: number.isRequired,
  endPrice: number.isRequired,
  onSubmit: func.isRequired,
}

export default SearchPage
