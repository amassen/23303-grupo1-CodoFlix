import React from 'react'
import { ReactComponent as Envelope } from '../../../assets/envelope-fill.svg'
import { useModal } from '../../../hooks/useModals'
import { Modal } from '../../molecule/Modal'
import { ContactForm } from '../contact-form/ContactForm'

export const FooterContact = ({ text }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false)

  return (
    <div className="col-sm-12 col-md-2">
      <button onClick={openModal}>
        <p className="lh-lg text-uppercase">
          <Envelope style={{ marginRight: '6px' }} />
          {text}
        </p>
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  )
}
