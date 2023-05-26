import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import Input from '@/components/Input/Input';

import { FormValues } from './types';

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    // Submitting simulation
    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;

        if (isSuccess) {
          resolve(console.log(data));
        } else {
          reject(new Error('Не вдалось відправити.'));
        }
      }, 2000);
    });

    toast.promise(myPromise, {
      loading: 'Надсилаю...',
      success: 'Дані успішно надіслані!',
      error: 'Не вдалось відправити.',
    });

    try {
      await myPromise;
      reset();
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-[300px] form px-5 pt-8 pb-5 rounded shadow-md"
    >
      <Input
        label="Ім'я"
        id="name"
        type="text"
        placeholder="Ім'я"
        error={errors.name?.message}
        register={register('name', {
          required: "Це поле обов'язкове",
          minLength: {
            value: 4,
            message: 'Мінімальна довжина 4 символи',
          },
          maxLength: {
            value: 64,
            message: 'Максимальна довжина 64 символи',
          },
        })}
      />

      <Input
        label="Телефон"
        id="phone"
        type="tel"
        placeholder="Телефон"
        error={errors.phone?.message}
        register={register('phone', {
          required: "Це поле обов'язкове",
          pattern: {
            value: /^\+\d{12}$/,
            message: 'Формат +380123456789',
          },
        })}
      />

      <Input
        label="Пошта"
        id="email"
        type="email"
        placeholder="Пошта"
        error={errors.email?.message}
        register={register('email', {
          required: "Це поле обов'язкове",
          pattern: {
            value: /^[\w][\w.-]{1,62}@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Введіть дійсну електронну пошту',
          },
        })}
      />

      <div className="relative flex mb-10 ">
        <input
          id="flag"
          className="px-2 py-1 mr-2 peer focus:outline-none"
          type="checkbox"
          {...register('flag', {
            required: "Це поле обов'язкове",
          })}
        />
        <label
          className={`
          border-b-2
          peer-focus:border-b-2
          peer-focus:border-blue-500
          ${errors.flag ? 'border-red-500' : 'border-transparent'}`}
          htmlFor="flag"
        >
          Готовий до пригод
        </label>
        {errors.flag && <p className="input-error">{errors.flag.message}</p>}
      </div>

      <button
        className="self-center px-2 py-1 text-white transition duration-300 bg-blue-500 rounded w-fit focus:ring-2 focus:ring-blue-500 focus:outline-none focus:bg-blue-600 hover:bg-blue-600 disabled:bg-slate-700 disabled:text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Відправка...' : 'Надіслати'}
      </button>
    </form>
  );
}
