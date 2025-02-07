import SideWindow from "../login/SideWindow"
import LoginSection from "../login/LoginSection"

const Login = () => {
  return (
    <div className="flex font-poppins h-full w-fill max-laptop:flex-col">
      <SideWindow />
      <LoginSection />
    </div>
  )
}

export default Login
