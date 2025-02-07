import Input from "../ui/Input"

const LoginItems = ({ formData, errors, handleChange }) => {
  return (
    <div className="flex justify-between gap-8 pt-14 max-desktop-small:pt-10 max-desktop-small:gap-6 max-laptop:gap-3 max-tablet:pt-6 max-mobile:flex-col">
      {/* Left Column */}
      <div className="flex flex-col grow gap-6">
        <div>
          <Input label="First name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
        </div>

        <div>
          <Input label="Email or phone number" type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div>
          <Input label="Password" type="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
        </div>
      </div>
      {/* Right Column */}
      <div className="flex flex-col grow gap-6">
        <div>
          <Input label="Last name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
          {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
        </div>

        <div>
          <Input label="Date of birth (DD/MM/YY)" type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
        </div>

        <div>
          <Input label="Confirm password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
        </div>
      </div>
    </div>
  );
};

export default LoginItems
