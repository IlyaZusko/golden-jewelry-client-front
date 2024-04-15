import { User } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { navItemStyles } from '@/lib/constants';

import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface IMainAppHeader {
  isAuth: false | User | null;
  isHideRightButtons?: boolean;
}

const MainAppHeader = ({ isAuth, isHideRightButtons }: IMainAppHeader) => {
  const router = useRouter();
  return (
    <div className="fixed top-0 z-20 w-full flex flex-row justify-between px-[30px] sm:px-[60px] lg:px-[120px] py-6 text-white items-center text-sm bg-gradient-to-b from-black/60 gap-x-6 bg-blend-color-burn">
      <div className="custom800:hidden">
        <Sheet>
          <SheetTrigger className="w-[39px] h-[39px] rounded-full bg-custom-yellow flex justify-center items-center">
            <Image
              src={require('@/public/icons/burger-menu.svg')}
              alt=""
              width={22}
              height={15}
            />
          </SheetTrigger>
          <SheetContent
            className="w-[240px] sm:w-[300px] bg-custom-white"
            side={'left'}
          >
            <Link
              className="font-foglihten text-base sm:text-xl font-medium text-custom-black-title pt-5"
              href={'/'}
            >
              Golden Jewelry
            </Link>
            <Button variant={'default'} className="py-2 px-5 mt-4 w-full">
              {isAuth ? (
                <Link href={'/profile'}>Профиль</Link>
              ) : (
                <Link href={'/auth/sign-in'}>Войти</Link>
              )}
            </Button>
            <div className="flex flex-col gap-y-2 pt-5 justify-center">
              <Link className={navItemStyles} href={'/catalog'}>
                Каталог
              </Link>
              <button
                className={navItemStyles}
                onClick={() => router.push('/?to=services')}
              >
                Услуги
              </button>
              <button
                className={navItemStyles}
                onClick={() => router.push('/?to=about-us')}
              >
                О нас
              </button>
              <button
                className={navItemStyles}
                onClick={() => router.push('/?to=contact-form')}
              >
                Написать нам
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Link
        className="font-foglihten text-base sm:text-xl sm:text-right font-medium text-white min-w-[181px]"
        href={'/'}
      >
        Golden Jewelry
      </Link>
      <nav className="hidden custom800:flex w-full flex-row items-center justify-between lg:justify-center lg:gap-x-8">
        <Link className={navItemStyles} href={'/catalog'}>
          Каталог
        </Link>
        <button
          className={navItemStyles}
          onClick={() => router.push('/?to=services')}
        >
          Услуги
        </button>
        <button
          className={navItemStyles}
          onClick={() => router.push('/?to=about-us')}
        >
          О нас
        </button>
        <button
          className={navItemStyles}
          onClick={() => router.push('/?to=contact-form')}
        >
          Написать нам
        </button>
      </nav>
      {!isHideRightButtons && (
        <Button variant={'default'} className="py-2 px-5 hidden custom800:flex">
          {isAuth ? (
            <Link href={'/profile'}>Профиль</Link>
          ) : (
            <Link href={'/auth/sign-in'}>Войти</Link>
          )}
        </Button>
      )}
    </div>
  );
};

export default MainAppHeader;
