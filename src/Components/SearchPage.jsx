import React, { useState } from 'react'
import { func } from 'prop-types'
import './SearchPage.css'

const SearchPage = ({ onSubmit }) => {
  const [startPrice, setStartPrice] = useState(0)
  const [endPrice, setEndPrice] = useState(0)

  const submit = () => {
    onSubmit(startPrice, endPrice)
  }

  return (
    <div className="SearchPage">
      <h1>Car Gurus AutoList Car Finder</h1>
      <h2>Enter a price range to search</h2>
      <div className="inputs">
        <div>
          <input
            value={startPrice}
            onChange={(e) => setStartPrice(Number(e.target.value))}
            type="text"
            placeholder="Start range"
          />
        </div>
        <div>
          <input
            value={endPrice}
            onChange={(e) => setEndPrice(Number(e.target.value))}
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
  onSubmit: func.isRequired,
}

export default SearchPage
