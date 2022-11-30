type formRowProps = {
  type: string;
  name: string;
  placeholder?: string;
  blue?: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const FormRow = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  blue,
}: formRowProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={`w-full pl-3 py-4 text-xs ${
        blue ? "bg-blue-500 text-white" : "bg-gray-50 text-gray-800"
      }  placeholder-gray-400 font-semibold leading-none outline-none`}
    />
  );
};

export default FormRow;
