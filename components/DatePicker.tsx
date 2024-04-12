import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface IDatePicker {
  selected?: Date;
  setSelected: (v: Date | undefined) => void;
  error?: string;
}

const DatePicker = ({ selected, setSelected, error }: IDatePicker) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
          <Button
            variant={'outline'}
            className={cn(
              'w-full justify-start text-left text-custom-black-title font-medium border-0 bg-white',
            )}
            size="small"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? (
              format(selected, 'PPP', { locale: ru })
            ) : (
              <span className="text-gray-500">Выбрать дату доставки</span>
            )}
          </Button>
          {error && <p className="text-[#EB5757] text-xs mt-1">{error}</p>}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-custom-white rounded-[8px]">
        <Calendar
          locale={ru}
          mode="single"
          selected={selected}
          onSelect={(v) => setSelected(v)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
