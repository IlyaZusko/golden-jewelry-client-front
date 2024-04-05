import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const Catalog = () => {
  return (
    <div className="px-[30px] sm:px-[120px] py-[60px] bg-custom-black-title flex flex-col justify-center items-center">
      <p className="font-foglihten text-2xl sm:text-3xl text-white text-center">
        Каталог готовых изделий
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-14 justify-center mt-12">
        {Array.from({ length: 4 }).map((item, index) => (
          <div key={index} className="max-w-[260px]">
            <Image
              src={require('@/public/images/test-ring-image-1.jpg')}
              alt=""
              width={260}
              height={260}
              className="rounded-xl"
            />
            <p className="font-foglihten text-xl text-white mt-5">Кольца</p>
            <p className="text-xs font-light text-white mt-1">
              Обручальные, а также повседневные кольца из различных материалов
            </p>
            <Button variant={'default'} className="w-full py-2 mt-4">
              Перейти к товарам
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
