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
    <label className="relative flex flex-col mb-5">
      {label}
      <input
        id={id}
        className={`px-2 py-1 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } focus:border-blue-500 focus:outline-none rounded text-gray-950`}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && (
        <p className="input-error">{error}</p>
      )}
    </label>
  );
}
