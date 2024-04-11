import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-custom-yellow text-xs font-semibold text-custom-black-title rounded-3xl transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-yellow-400/30',
        outline:
          'text-xs border border-custom-yellow font-semibold text-white rounded-3xl duration-300 ease-in-out hover:bg-custom-yellow hover:text-custom-black-title',
        outlineRevert:
          'text-xs border border-gray-300 font-semibold text-custom-black-title rounded-3xl duration-300 ease-in-out hover:bg-red-500 hover:text-white',
        delete:
          'text-xs border border-red-500 font-semibold text-custom-black-title rounded-3xl duration-300 ease-in-out hover:bg-red-500 hover:text-white',
        custom: '',
      },
      size: {
        default: 'px-8 py-3',
        small: 'px-4 py-2',
        circle: 'px-2 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
