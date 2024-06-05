import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Footer = () => {
  const router = useRouter();

  return (
    <div className="w-full px-[30px] xs:px-[60px] pt-6 xs:pt-12 pb-6 bg-custom-white rounded-[30px] flex flex-col-reverse xs:flex-row justify-between items-center gap-y-6">
      <div>
        <p className="font-foglihten text-xl">Карта сайта</p>
        <div className="flex flex-row gap-x-4 mt-2">
          <div className="flex flex-col gap-y-[2px]">
            <Link className="text-sm font-light hover:underline" href="#">
              Главная
            </Link>
            <Link
              className="text-sm font-light hover:underline"
              href={'/catalog'}
            >
              Каталог
            </Link>
            <button
              className="text-sm font-light hover:underline text-start"
              onClick={() => router.push('/?to=services')}
            >
              Услуги
            </button>
          </div>
          <div className="flex flex-col gap-y-[2px]">
            <button
              className="text-sm font-light hover:underline text-start"
              onClick={() => router.push('/?to=about-us')}
            >
              О нас
            </button>
            <button
              className="text-sm font-light hover:underline text-start"
              onClick={() => router.push('/?to=contact-form')}
            >
              Написать нам
            </button>
          </div>
        </div>
      </div>
      <Link href={'/'} className="font-foglihten text-2xl font-medium">
        Golden Jewelry
      </Link>
    </div>
  );
};

export default Footer;
