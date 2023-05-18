import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  phone: string;
  email: string;
  flag: boolean;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onTouched',
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-[400px]"
    >
      <div className="relative flex flex-col mb-5">
        <label htmlFor="name">Ім'я</label>
        <input
          id="name"
          className={`px-2 py-1 border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:border-blue-500 focus:outline-none rounded`}
          type="text"
          placeholder="Філеас Фоґґ"
          {...register('name', {
            required: "Це поле обов'язкове",
            minLength: {
              value: 4,
              message: 'Мінімальна довжина 4 символи',
            },
          })}
        />

        {errors.name && (
          <p className="absolute -bottom-5 left-0 text-red-500 text-sm">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="relative flex flex-col mb-5">
        <label htmlFor="phone">Телефон</label>
        <input
          id="phone"
          className={`px-2 py-1 border ${
            errors.phone ? 'border-red-500' : 'border-gray-300'
          } focus:border-blue-500 focus:outline-none rounded`}
          type="tel"
          placeholder="+380123456789"
          {...register('phone', {
            required: "Це поле обов'язкове",
            pattern: {
              value: /^\+\d{12}$/,
              message: 'Введіть коректний номер телефону',
            },
          })}
        />
        {errors.phone && (
          <p className="absolute -bottom-5 left-0 text-red-500 text-sm">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="relative flex flex-col mb-5">
        <label htmlFor="email">Пошта</label>
        <input
          id="email"
          className={`px-2 py-1 border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:border-blue-500 focus:outline-none rounded`}
          type="email"
          placeholder="around@world.ua"
          {...register('email', {
            required: "Це поле обов'язкове",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Введіть коректну електронну пошту',
            },
          })}
        />
        {errors.email && (
          <p className="absolute -bottom-5 left-0 text-red-500 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="relative flex mb-10">
        <input
          id="flag"
          className="px-2 py-1 mr-2"
          type="checkbox"
          {...register('flag', {
            required: "Це поле обов'язкове",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Введіть коректну електронну пошту',
            },
          })}
        />
        <label htmlFor="flag">Готовий до пригод</label>
        {errors.flag && (
          <p className="absolute -bottom-5 left-0 text-red-500 text-sm">
            {errors.flag.message}
          </p>
        )}
      </div>

      <button
        className="w-fit self-center px-2 py-1 text-white border border-gray-300 bg-blue-500 focus:border-blue-500 focus:outline-none focus:bg-blue-400 hover:border-blue-500 hover:bg-blue-400 rounded"
        type="submit"
      >
        Відправити
      </button>
    </form>
  );
}
