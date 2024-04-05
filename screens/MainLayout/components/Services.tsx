import React from 'react';

import Service1 from '@/public/images/service-1.png';
import Service2 from '@/public/images/service-2.png';
import Service3 from '@/public/images/service-3.png';
import Service4 from '@/public/images/service-4.png';

import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <div className="px-[30px] sm:px-[60px] lg:px-[120px] py-[60px] bg-custom-black-title flex flex-col justify-center items-center">
      <p className="font-foglihten text-xl sm:text-3xl text-white">
        Наши услуги
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-x-10 gap-y-6 mt-12">
        <div className="flex flex-col sm:flex-row gap-y-6 gap-x-10">
          <ServiceItem
            title="Готовые ювелирные изделия"
            subTitle="Готовые ювелирные изделия на любой вкус и цвет"
            image={Service1}
            width={260}
            height={479}
          />
          <ServiceItem
            title="Изготовление ювелирных изделий"
            subTitle="Создания ювелирного уркашения любой сложности"
            image={Service2}
            width={260}
            height={479}
          />
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col justify-between gap-y-6 gap-x-10">
          <ServiceItem
            title="Ремонт и реставрация"
            subTitle="Качественный ремонт и реставрация ваших ювелирных изделий"
            image={Service3}
            width={260}
            height={224}
          />
          <ServiceItem
            title="Разработка дизайна"
            subTitle="Разработка яркого и уникального дизайна"
            image={Service4}
            width={260}
            height={224}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
