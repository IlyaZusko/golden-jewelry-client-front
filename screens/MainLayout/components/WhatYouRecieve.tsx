import Image from 'next/image';
import React from 'react';

import { advantagesComponent } from '@/lib/constants';

const WhatYouRecieve = () => {
  return (
    <div className="px-[30px] sm:px-[120px] pt-[60px] pb-[60px]">
      <div>
        <p className="font-foglihten text-2xl sm:text-3xl">Что вы получаете</p>
        <p className="font-foglihten text-2xl sm:text-3xl pl-20">Выбирая нас</p>
      </div>
      <div className="flex flex-wrap justify-center items-center px-10 pt-7 gap-5">
        {advantagesComponent.map((item, index) => (
          <div
            className="flex-1 min-w-[208px] flex flex-col justify-center items-center"
            key={index}
          >
            <Image src={item.icon} alt="" width={64} height={64} />
            <p className="font-foglihten text-xl mt-5">{item.title}</p>
            <p className="text-xs font-light mt-1 text-center max-w-52">
              {item.subTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouRecieve;
