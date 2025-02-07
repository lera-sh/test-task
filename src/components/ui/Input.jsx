import React, { useCallback, useRef } from "react";
import calendar from "../../assets/calendar.svg"

export const Input = ({ label, type = "text", ...props }) => {
  const inputRef = useRef(null)

  // Function to trigger the native date picker when clicking the calendar icon
  const handleIconClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.showPicker()
    }
  }, [inputRef])

  return (
    <div className="flex flex-col text-dark gap-1 relative">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          type={type}
          className="bg-white w-full px-3 py-2.75 border rounded-md autofill:none max-desktop-big:py-2 max-tablet:text-xs"
          {...props}
        />
        {type === "date" && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={handleIconClick}
          >
            <img src={calendar} alt="calendar" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
