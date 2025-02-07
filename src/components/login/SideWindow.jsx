import imgs from '../../assets/imgs.png'

const SideWindow = () => {
  return (
    <div className="bg-main-gradient flex flex-col items-center justify-center px-130 pt-16 pb-98 max-desktop-big:px-16 max-desktop-big:py-8 max-desktop-big:justify-start">
      {/* Title Section */}
      <h3 className="font-semibold text-28 text-white text-center leading-12 pb-82 w-554 max-desktop-big:pb-98 max-desktop-small:w-full max-desktop-small:pb-16 max-laptop:pb-8 max-tablet:text-2xl">
        Social media shared today, tomorrow or by location
      </h3>

      {/* Image Container */}
      <div className="relative flex flex-col items-center">
        {/* Circular Background Effect */}
        <div className="bg-additional-gradient absolute h-593 w-593 rounded-full max-desktop-small:w-450 max-desktop-small:h-450 max-laptop:w-96 max-laptop:h-96 max-mobile:w-72 max-mobile:h-72"></div>

        {/* Image */}
        <div className="relative max-desktop-small:w-370 max-laptop:w-72 max-mobile:w-64">
          <img src={imgs} alt="Social Media Representation" />
        </div>
      </div>
    </div>
  )
}

export default SideWindow
