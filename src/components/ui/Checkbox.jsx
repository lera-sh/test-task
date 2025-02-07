const Checkbox = ({ label, ...props }) => {
  return (
    <label className="flex items-center space-x-3 max-laptop:space-x-1">
      <input type="checkbox" className="w-5 h-5 cursor-pointer max-desktop-small:w-4 max-desktop-small:h-4" {...props} />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
};

export default Checkbox
