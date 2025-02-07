import Button from "../ui/Button"
import googlePlay from "../../assets/google-play.svg"
import apple from "../../assets/apple.svg"

const DownloadButtons = () => {
  return (
    <div className="flex font-normal gap-3 pt-24 max-desktop-small:pt-6 max-desktop-small:justify-center">
      {/* Google Play Download Button */}
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <Button className="bg-black px-1.5 py-1">
          <img className="w-8" src={googlePlay} alt="google-play" />
          <div className="text-start pl-1.5">
            <p className="uppercase text-ss leading-4">Get it on</p>
            <p className="text-xsm leading-4">Google Play</p>
          </div>
        </Button>
      </a>
      
      {/* App Store Download Button */}
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <Button className="bg-black px-1.5 py-1">
          <img src={apple} alt="apple" />
          <div className="text-start pl-1.5">
            <p className="text-ss leading-4">Download on the</p>
            <p className="text-xsm leading-4">App Store</p>
          </div>
        </Button>
      </a>
    </div>
  )
}

export default DownloadButtons
