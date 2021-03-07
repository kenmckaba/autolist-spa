import React from 'react'
import Modal from 'react-modal'
import { func, number, shape } from 'prop-types'

Modal.setAppElement('body')

const CarModal = ({ itemToView, viewCount, onClose }) => (
  <Modal className="Modal" isOpen={itemToView} onRequestClose={onClose}>
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
  </Modal>
)

CarModal.propTypes = {
  itemToView: shape({}).isRequired,
  viewCount: number.isRequired,
  onClose: func.isRequired,
}

export default CarModal
