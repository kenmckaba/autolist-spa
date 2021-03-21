import React, { useState } from 'react'
import { func, number } from 'prop-types'
import './SearchPage.css'
import { Button, useColorMode } from '@chakra-ui/react'

const SearchPage = ({ startPrice, endPrice, onSubmit }) => {
  const [startPriceLocal, setStartPriceLocal] = useState(startPrice)
  const [endPriceLocal, setEndPriceLocal] = useState(endPrice)

  const submit = () => {
    onSubmit(startPriceLocal, endPriceLocal)
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="SearchPage">
      <h1>Car Gurus AutoList Car Finder {colorMode}</h1>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
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
