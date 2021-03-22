/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { func, number } from 'prop-types'
import {
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  useColorMode,
  VStack,
} from '@chakra-ui/react'

const SearchPage = ({ startPrice, endPrice, onSubmit }) => {
  const [startPriceLocal, setStartPriceLocal] = useState(startPrice)
  const [endPriceLocal, setEndPriceLocal] = useState(endPrice)

  const submit = () => {
    onSubmit(startPriceLocal, endPriceLocal)
  }

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack spacing={5}>
      <Heading size="xl">Car Gurus AutoList Car Finder</Heading>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <Heading size="md">Enter a price range to search</Heading>
      <HStack>
        <Input
          onChange={(e) => setStartPriceLocal(Number(e.target.value))}
          type="text"
          placeholder="Start range"
        />
        <Input
          value={endPrice}
          onChange={(e) => setEndPriceLocal(Number(e.target.value))}
          type="text"
          placeholder="End range"
        />
      </HStack>
      <Button mt={5} onClick={submit}>
        Search
      </Button>
    </VStack>
  )
}

SearchPage.propTypes = {
  startPrice: number.isRequired,
  endPrice: number.isRequired,
  onSubmit: func.isRequired,
}

export default SearchPage
