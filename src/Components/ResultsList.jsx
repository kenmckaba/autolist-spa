import React from 'react'
import { func, arrayOf, shape } from 'prop-types'

const ResultsList = ({ items, onClick }) => (
  <ul>
    {items.map(
      (item) => (
        <li key={item.vin}>
          <div
            role="button"
            onClick={() => onClick(item)}
            onKeyPress={() => {}}
            tabIndex={0}
          >
            {item.make}&nbsp;{item.body_type}&nbsp;{item.price}
          </div>
        </li>
      ),
      []
    )}
  </ul>
)

ResultsList.propTypes = {
  items: arrayOf(shape({})).isRequired,
  onClick: func.isRequired,
}

export default ResultsList
