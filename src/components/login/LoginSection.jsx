import DownloadButtons from "../common/DownloadButtons"
import Logo from "../common/Logo"
import LoginForm from "./LoginForm"

const LoginSection = () => {
  return (
    <div className="flex flex-col w-fill pt-16 pb-8 pl-162 pr-196 max-desktop-big:px-16 max-desktop-big:py-8 max-desktop-small:px-10 max-laptop:px-6">
      <Logo />
      <LoginForm />
      <DownloadButtons />
    </div>
  )
}

export default LoginSection
