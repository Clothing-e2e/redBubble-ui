import './Input.css';

const Input = ({
  placeholder,
  value,
  handleChange,
  width,
  required,
  name = '',
}) => {
  return (
    <div className={`relative w-[${width}] h-12 mt-4`}>
      <input
        type="text"
        className={`w-[${width}] h-[100%] border border-slate-300 focus:border-slate-800 focus:border-2 pl-4 rounded-lg absolute top-0 left-0 input`}
        value={value}
        onChange={handleChange}
        placeholder=" "
        name={name}
      />
      <label className="label">
        {required ? `${placeholder} *` : placeholder}
      </label>
    </div>
  );
};

export default Input;
