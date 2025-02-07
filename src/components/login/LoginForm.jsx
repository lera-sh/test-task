import { useCallback, useState } from "react"
import LoginItems from "./LoginItems"
import LoginButtons from "./LoginButtons"
import AuthOptions from "./AuthOptions"
import LoginModals from "./LoginModals"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  })
  
  const [errors, setErrors] = useState({});
  const [successModal, setSuccessModal] = useState(false);
  const [googleModal, setGoogleModal] = useState(false);

  const validate = useCallback(() => {
    let newErrors = {};
    if (formData.firstName.length < 2) newErrors.firstName = "First name must be at least 2 characters.";
    if (formData.lastName.length < 2) newErrors.lastName = "Last name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData])

  const handleChange = useCallback((e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }, [formData])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 3000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
      })
    }
  }

  return (
    <form className="pt-14 max-desktop-small:pt-10 max-tablet:pt-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <h2 className="text-28 text-dark leading-9.5 font-semibold">Create account</h2>
        <p className="text-dark text-xxs text-normal">For business, band, or celebrity.</p>
      </div>
      <LoginItems formData={formData} errors={errors} handleChange={handleChange} />
      <AuthOptions />
      <LoginButtons setGoogleModal={setGoogleModal} />
      <div className="text-center pt-6 text-xxs">
        Don’t have an account? <a href="#" className="text-blue">Log In</a>
      </div>
      <LoginModals successModal={successModal} googleModal={googleModal} setGoogleModal={setGoogleModal} />
    </form>
  )
}

export default LoginForm;
