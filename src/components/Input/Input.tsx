import { InputProps } from './types';

export default function Input({
  label,
  id,
  type,
  placeholder,
  register,
  error,
}: InputProps) {
  return (
    <div className="relative mb-10">
      <input
        id={id}
        className={`peer placeholder:text-transparent w-full px-2 py-1 bg-transparent border-b-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:border-blue-500 focus:outline-none text-gray-950`}
        type={type}
        placeholder={placeholder}
        autoComplete="none"
        {...register}
      />
      <label
        htmlFor={id}
        className="absolute text-sm transition-all -top-4 left-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1 peer-placeholder-shown:text-base peer-focus:text-gray-900 peer-focus:-top-4 peer-focus:text-sm"
      >
        {label}
      </label>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
}
