import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { func, number, shape } from 'prop-types'
import ReactImageAppear from 'react-image-appear'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { retrieveFavorite, storeFavorite } from '../utils/viewsDb'
import './CarModal.css'

Modal.setAppElement('body')

const CarModal = ({ itemToView, viewCount, onClose }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  const onFavorite = (vin) => {
    setIsFavorite((wasFavorite) => {
      storeFavorite(vin, !wasFavorite)
      return !wasFavorite
    })
  }

  useEffect(() => {
    const getFavorite = async () => {
      const value = await retrieveFavorite(itemToView.vin)
      setIsFavorite(value)
    }
    getFavorite()
  }, [])

  return (
    <Modal className="Modal" isOpen={!!itemToView} onRequestClose={onClose}>
      <Heading size="lg" mb="2">
        Vehicle Details
      </Heading>
      <Button pos="absolute" right="0" top="0" onClick={onClose}>
        X
      </Button>
      <HStack align="flex-start">
        <ReactImageAppear
          className="image"
          src={itemToView?.primary_photo_url}
          placeholderClass="image"
        />
        <VStack align="flex-start">
          <Box fontWeight="bold">
            {itemToView?.year} {itemToView?.make} {itemToView?.model}
          </Box>
          <Box>{itemToView?.mileage}</Box>
          <Box>{itemToView?.price}</Box>
          <Box>Location: {itemToView?.city}</Box>
          <Flex
            direction="column"
            alignItems="center"
            pos="absolute"
            bottom="1"
          >
            <Box>Viewed {viewCount} times</Box>
            <Checkbox
              id="favorites"
              checked={isFavorite}
              onChange={() => onFavorite(itemToView.vin)}
            >
              Add to favorites
            </Checkbox>
          </Flex>
        </VStack>
      </HStack>
    </Modal>
  )
}

CarModal.propTypes = {
  itemToView: shape({}).isRequired,
  viewCount: number.isRequired,
  onClose: func.isRequired,
}

export default CarModal
