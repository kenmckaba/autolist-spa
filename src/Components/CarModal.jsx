import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { func, number, shape } from 'prop-types'
import { retrieveFavorite, storeFavorite } from '../utils/viewsDb'

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
    setIsFavorite(retrieveFavorite(itemToView.vin))
  }, [])

  return (
    <Modal className="Modal" isOpen={!!itemToView} onRequestClose={onClose}>
      <h1>Vehicle Details</h1>
      <div>
        {itemToView?.year} {itemToView?.make} {itemToView?.model}
      </div>
      <div>{itemToView?.mileage}</div>
      <div>{itemToView?.price}</div>
      <div>{itemToView?.city}</div>
      <div>Viewed {viewCount} times</div>
      <img src={itemToView?.primary_photo_url} alt="Car" />
      <button onClick={onClose} type="submit">
        Close
      </button>
      <input
        type="checkbox"
        checked={isFavorite}
        onChange={() => onFavorite(itemToView.vin)}
      />
    </Modal>
  )
}

CarModal.propTypes = {
  itemToView: shape({}).isRequired,
  viewCount: number.isRequired,
  onClose: func.isRequired,
}

export default CarModal
