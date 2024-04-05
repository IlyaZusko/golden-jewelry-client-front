import React, { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (v: string) => void;
  placeholder: string;
  error?: string | null;
}

const TextInput = ({
  value,
  onChange,
  type,
  error,
  placeholder,
  ...props
}: TextInputProps) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          'w-full h-10 bg-white border border-[#BEBEBE] rounded-full text-black px-5 text-xs',
          error ? 'border-[#EB5757]' : '',
        )}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        style={{
          outline: 'none',
        }}
        {...props}
      />
      {error && <p className="text-[#EB5757] text-xs mt-1">{error}</p>}
    </div>
  );
};

export default React.memo(TextInput);
