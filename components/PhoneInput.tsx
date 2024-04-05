import React, { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

import { cn } from '@/lib/utils';

export interface PhoneInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (v: string) => void;
  error?: string | null;
}

const PhoneInput = ({ value, onChange, error, ...props }: PhoneInputProps) => {
  return (
    <div className="w-full">
      <InputMask
        mask={'+375 (99) 999-99-99'}
        placeholder={'+375 (29) 999-99-99'}
        className={cn(
          'w-full h-10 bg-white border-[#BEBEBE] rounded-full text-black px-5 text-xs',
          error ? 'border-[#EB5757]' : '',
        )}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        {...props}
      />
      {error && <p className="text-[#EB5757] text-xs mt-1">{error}</p>}
    </div>
  );
};

export default React.memo(PhoneInput);
