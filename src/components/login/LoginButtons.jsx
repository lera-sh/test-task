import Button from "../ui/Button"
import google from "../../assets/google.svg"
import { useCallback } from "react"

const LoginButtons = ({ setGoogleModal }) => {
  // Open the Google authentication modal
  const handleModalOpening = useCallback(() => {
    setGoogleModal(true)
  }, [setGoogleModal])

  return (
    <div className="flex pt-8 gap-8 max-desktop-small:gap-6 max-desktop-small:pt-6 max-laptop:gap-3 max-mobile:flex-col">
      <Button type="submit" className="bg-blue grow p-3 font-semibold w-full max-laptop:p-2.5">Create account</Button>
      <Button type="button" className="bg-dark-gray grow gap-3 p-3 font-semibold w-full max-laptop:gap-1 max-laptop:p-2.5" onClick={handleModalOpening}>
        <img src={google} alt="Google Icon" />
        Sign in with Google
      </Button>
    </div>
  )
}

export default LoginButtons
