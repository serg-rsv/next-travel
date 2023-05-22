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
      className="flex flex-col w-full max-w-[400px]"
    >
      <Input
        label="Ім'я"
        id="name"
        type="text"
        placeholder="Філеас Фоґґ"
        error={errors.name?.message}
        register={register('name', {
          required: "Це поле обов'язкове",
          minLength: {
            value: 4,
            message: 'Мінімальна довжина 4 символи',
          },
        })}
      />

      <Input
        label="Телефон"
        id="phone"
        type="tel"
        placeholder="+380123456789"
        error={errors.phone?.message}
        register={register('phone', {
          required: "Це поле обов'язкове",
          pattern: {
            value: /^\+\d{12}$/,
            message: 'Введіть коректний номер телефону',
          },
        })}
      />

      <Input
        label="Пошта"
        id="email"
        type="email"
        placeholder="around@world.ua"
        error={errors.email?.message}
        register={register('email', {
          required: "Це поле обов'язкове",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Введіть дійсну електронну пошту',
          },
        })}
      />

      <label className="relative flex mb-10">
        <input
          id="flag"
          className="px-2 py-1 mr-2"
          type="checkbox"
          {...register('flag', {
            required: "Це поле обов'язкове",
          })}
        />
        Готовий до пригод
        {errors.flag && <p className="input-error">{errors.flag.message}</p>}
      </label>

      <button
        className="w-fit self-center px-2 py-1 text-white border border-gray-300 bg-blue-500 focus:border-blue-500 focus:outline-none focus:bg-blue-400 hover:border-blue-500 hover:bg-blue-400 rounded disabled:bg-slate-700 disabled:text-white"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Відправка...' : 'Надіслати'}
      </button>
    </form>
  );
}
