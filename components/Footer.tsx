import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full px-[30px] xs:px-[60px] pt-6 xs:pt-12 pb-6 bg-custom-white rounded-[30px] flex flex-col-reverse xs:flex-row justify-between items-center gap-y-6">
      <div>
        <p className="font-foglihten text-xl">Карта сайта</p>
        <div className="flex flex-row gap-x-4 mt-2">
          <div className="flex flex-col gap-y-[2px]">
            <Link className="text-sm font-light hover:underline" href="#">
              Главная
            </Link>
            <Link className="text-sm font-light hover:underline" href="#">
              Каталог
            </Link>
            <Link className="text-sm font-light hover:underline" href="#">
              Услуги
            </Link>
          </div>
          <div className="flex flex-col gap-y-[2px]">
            <Link className="text-sm font-light hover:underline" href="#">
              О нас
            </Link>
            <Link className="text-sm font-light hover:underline" href="#">
              Связаться
            </Link>
          </div>
        </div>
      </div>
      <p className="font-foglihten text-2xl font-medium">Golden Jewelry</p>
    </div>
  );
};

export default Footer;
