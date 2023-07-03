import React from 'react'
import { ReactComponent as Envelope } from '../../../assets/envelope-fill.svg'
import { useModal } from '../../../hooks/useModals'
import { Modal } from '../../molecule/Modal'
import { ContactForm } from '../contact-form/ContactForm'
import { Button } from 'react-bootstrap'

export const FooterContact = ({ text }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false)

  return (
    <div className="col-sm-12 col-md-3 text-sm-center">
      <Button onClick={openModal} className="btn-contact">
        <Envelope style={{ marginRight: '6px' }} />
        {text}
      </Button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  )
}
