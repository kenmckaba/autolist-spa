import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { func, number, shape } from 'prop-types'
import ReactImageAppear from 'react-image-appear'
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
      <h1>Vehicle Details</h1>
      <button className="Close-button" onClick={onClose} type="submit">
        X
      </button>
      <div className="Car-details">
        <ReactImageAppear
          className="image"
          src={itemToView?.primary_photo_url}
          placeholderClass="image"
        />
        <div className="info">
          <div className="Year-make-model">
            {itemToView?.year} {itemToView?.make} {itemToView?.model}
          </div>
          <div>{itemToView?.mileage}</div>
          <div>{itemToView?.price}</div>
          <div>Location: {itemToView?.city}</div>
          <div className="meta">
            <div>Viewed {viewCount} times</div>
            <label htmlFor="favorites">
              <input
                id="favorites"
                type="checkbox"
                checked={isFavorite}
                onChange={() => onFavorite(itemToView.vin)}
              />
              Add to favorites
            </label>
          </div>
        </div>
      </div>
    </Modal>
  )
}

CarModal.propTypes = {
  itemToView: shape({}).isRequired,
  viewCount: number.isRequired,
  onClose: func.isRequired,
}

export default CarModal
