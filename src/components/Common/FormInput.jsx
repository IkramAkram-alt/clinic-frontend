const FormInput = ({ name, type = "text", value, onChange, placeholder, required = false }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className="w-full p-2 border rounded"
  />
);

export default FormInput;
