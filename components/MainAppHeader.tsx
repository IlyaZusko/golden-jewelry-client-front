import { User } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface IMainAppHeader {
  isAuth: false | User | null;
  isHideRightButtons?: boolean;
}

const MainAppHeader = ({ isAuth, isHideRightButtons }: IMainAppHeader) => {
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
            <SheetHeader>
              <SheetTitle className="text-left">
                Are you absolutely sure?
              </SheetTitle>
              <SheetDescription className="text-left">
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
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
        <button className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Каталог
        </button>
        <button className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Услуги
        </button>
        <button className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          Изготовление
        </button>
        <button className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
          О нас
        </button>
        <button className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-custom-yellow after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
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
