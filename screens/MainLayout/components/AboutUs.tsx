import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <div className="px-[30px] sm:px-[60px] lg:px-[120px] py-[60px]">
      <div>
        <p className="font-foglihten text-xl sm:text-3xl">
          Ювелирная мастерская
        </p>
        <p className="font-foglihten text-xl sm:text-3xl pl-0 sm:pl-20">
          Golden Jewelry
        </p>
      </div>
      <div className="w-full flex flex-row justify-between px-0 sm:px-20 pt-9 gap-0 sm:gap-12 items-center">
        <div className="flex flex-col items-center gap-y-5 text-center sm:text-left text-xs sm:text-base">
          <p>
            Ювелирная мастерская «Golden Jewelry» — это небольшой коллектив
            мастеров ювелирной сферы, обладающий богатым опытом, который
            использует передовые технологии и высокотехнологичный инструмент для
            создания ювелирных украшений любой сложности. Суммарный опыт наших
            трех мастеров-ювелиров более 50 лет, при этом средний возраст наших
            сотрудников – чуть более 30 лет, что позволяет с легкостью осваивать
            передовые технологии и инновации, смотреть свежим взглядом на
            современный дизайн и концепции украшений и создавать уникальные
            украшения из золота и серебра высочайшего качества.
          </p>
          <p>
            Наши ювелирные мастера уже много лет создают эксклюзивные изделия на
            заказ и имеют большой опыт в создании уникальных шедевров ювелирного
            искусства. Суммарный стаж ювелиров 27 лет. В Da Vinci гармонично
            пересекаются новейшие 3D-технологии и классическая ювелирная работа.
            Непревзойденное мастерство ювелирного искусства бережно хранится и
            воплощается в каждом изделии, рождённом нашими мастерами.Современные
            технологии позволяют создать уникальное украшение в единственном
            экземпляре с мельчайшей проработкой элементов по строгому
            соответствию эскизу.
          </p>
          <Button variant={'default'} className="max-w-40 mt-4">
            Связаться с нами
          </Button>
        </div>

        <Image
          src={require('@/public/images/jewelry-work-1.jpg')}
          alt=""
          width={384}
          height={576}
          className="rounded-3xl hidden xl:flex"
        />
      </div>
    </div>
  );
};

export default AboutUs;
