import Swal from 'sweetalert2'
import './Modal.css'

export const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation()
  const handleClick = () => {
    Swal.fire({
      title: 'Esta seguro que quiere cerrar el formulario de contacto?',
      showDenyButton: true,
      confirmButtonText: 'Cerrar',
      denyButtonText: `No cerrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Formulario cerrado!', '', 'success')
        closeModal()
      } else if (result.isDenied) {
        Swal.fire('Formulario no cerrado', '', 'info')
      }
    })
    
  }

  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={handleClick}>
          X
        </button>
        {children}
      </div>
    </article>
  )
}
