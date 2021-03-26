import React, { useEffect, useState } from 'react'
import { func, number } from 'prop-types'
import { Box, Button, Heading, HStack, VStack } from '@chakra-ui/react'

import { loginDb, getAndIncrement } from '../utils/viewsDb'
import fetchResults from '../utils/fetchResults'
import ResultsList from './ResultsList'
import CarModal from './CarModal'

const SearchResults = ({ startPrice, endPrice, onDone }) => {
  const [items, setItems] = useState([])
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
    <VStack spacing={1} textAlign="center">
      <Heading size="xl">Search Results</Heading>
      <HStack>
        <Box>Start: {startPrice}</Box>
        <Box>End: {endPrice}</Box>
      </HStack>
      <Heading>Click an entry to view details</Heading>
      <Button isDisabled={pageNum === 1} onClick={decrementPage}>
        Previous cars
      </Button>
      <Box overflow="auto">
        <ResultsList items={items} onClick={onSelect} />
      </Box>
      <VStack>
        <Button
          type="button"
          isDisabled={pageNum === maxPages}
          onClick={incrementPage}
        >
          Next cars
        </Button>
        <Button onClick={onDone}>Search again</Button>
      </VStack>
      {itemToView && (
        <CarModal
          itemToView={itemToView}
          viewCount={viewCount}
          onClose={() => setItemToView(null)}
        />
      )}
    </VStack>
  )
}

SearchResults.propTypes = {
  onDone: func.isRequired,
  startPrice: number.isRequired,
  endPrice: number.isRequired,
}

export default SearchResults
