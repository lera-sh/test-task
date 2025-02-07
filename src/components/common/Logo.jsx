import logo from '../../assets/logo.svg'

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={logo} alt="logo" />
      <h1 className="text-dark text-lg text-semibold px-2.5">Logo</h1>
    </div>
  )
}

export default Logo
