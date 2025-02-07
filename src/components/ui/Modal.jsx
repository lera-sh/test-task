import { useEffect } from "react"
import { createPortal } from "react-dom"

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    // Automatically close the modal after 3 seconds
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg font-semibold">{message}</p>
      </div>
    </div>,
    document.body
  )
}

export default Modal
