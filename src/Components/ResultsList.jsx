import React from 'react'
import { func, arrayOf, shape } from 'prop-types'
import { Box, HStack, List, ListItem } from '@chakra-ui/react'

const ResultsList = ({ items, onClick }) => (
  <List>
    {items.map(
      (item) => (
        <ListItem key={item.vin} onClick={() => onClick(item)}>
          <HStack justifyContent="space-between">
            <Box>
              {item.make} {item.body_type}
            </Box>
            <Box float="right">{item.price}</Box>
          </HStack>
        </ListItem>
      ),
      []
    )}
  </List>
)

ResultsList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  onClick: func.isRequired,
}

export default ResultsList
