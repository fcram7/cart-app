'use client';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { cartStore } from '@/utils/states/cart';
import { checkoutStore } from '@/utils/states/checkout';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

export const Shipping = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const { total } = cartStore();
  const { setCheckoutTotal } = checkoutStore();
  
  const shippingOptions = [
    {
      label: 'Regular',
      duration: 3,
      value: '7',
    },
    {
      label: 'Express',
      duration: 1,
      value: '12',
    },
  ];
  return (
    <div className='shipping mt-4'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            className='w-full justify-between'
          >
            {value
              ? shippingOptions.find((option) => option.value === value)?.label
              : 'Select shipping options...'}
            <ChevronsUpDown className='opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='lg:w-[700px] p-0'>
          <Command>
            <CommandList>
              <CommandGroup>
                {shippingOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={
                      (currentValue) => {
                      setValue(currentValue);
                      setCheckoutTotal(total + (parseInt(currentValue, 10)))
                      setOpen(false);
                    }}
                    className='w-full'
                  >
                    <div className="shipping__detail flex items-center justify-between w-full">
                      <div className='grid gap-2'>
                        <p className='font-semibold'>{option.label}</p>
                        <p className='opacity-50'>{option.duration} day(s) of shipping</p>
                      </div>
                      <p className='opacity-80'>$ {option.value}</p>
                    </div>
                    <Check
                      className={cn(
                        'ml.auto',
                        value === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
