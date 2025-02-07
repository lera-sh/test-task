import { useCallback } from "react"
import Modal from "../ui/Modal"

const LoginModals = ({ successModal, googleModal, setGoogleModal }) => {
  // Close the Google modal when it disappears
  const handleModalClosing = useCallback(() => {
    setGoogleModal(false)
  }, [])

  return (
    <>
      {successModal && <Modal message="Account created successfully!" />}
      {googleModal && <Modal message="Redirecting to Google authentication..." onClose={handleModalClosing} />}
    </>
  )
}

export default LoginModals
