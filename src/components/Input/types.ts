import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
  label: string;
  id: string;
  type: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error: string | undefined;
};
