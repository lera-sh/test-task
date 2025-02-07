import Checkbox from "../ui/Checkbox"

const AuthOptions = () => {
  return (
    <div className="flex justify-between pt-6 max-desktop-small:text-xxs max-tablet:flex-col-reverse max-tablet:gap-4">
      <div className="flex flex-col text-dark gap-4 max-tablet:gap-2">
        <Checkbox label="Remember me" />
        <label className="flex items-center space-x-3 text-xxs max-laptop:space-x-1">
          <input type="checkbox" className="w-5 h-5 cursor-pointer max-desktop-small:w-4 max-desktop-small:h-4" required />
          <span>I agree to the <a href="#" className="text-blue">Terms</a> and <a href="#" className="text-blue">Privacy Policy</a></span>
        </label>
      </div>
      <a href="#" className="text-blue text-sm max-tablet:text-end">Forgot password?</a>
    </div>
  )
}

export default AuthOptions
