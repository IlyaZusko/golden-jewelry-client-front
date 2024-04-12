'use client';
import { signOut } from 'firebase/auth';
import React from 'react';

import MainAppHeader from '@/components/MainAppHeader';
import { Button } from '@/components/ui/button';
import { auth } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { clearListOrders } from '@/lib/store/service/ordersSlice';
import { clearProducts } from '@/lib/store/service/productsSlice';
import { clearUserData } from '@/lib/store/service/userSlice';

import Tabs from './components/Tabs';

const ProfileScreen = () => {
  const { userData } = useAppSelector((state) => state.user);
  const user = useUser();
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    signOut(auth);
    dispatch(clearUserData());
    dispatch(clearProducts());
    dispatch(clearListOrders());
  };

  if (!userData?.email) {
    return null;
  }
  return (
    <div>
      <MainAppHeader isAuth={user} isHideRightButtons />
      <div className="w-full flex flex-row bg-custom-black-title pb-12 pt-[128px] px-[30px] sm:px-[60px] lg:px-[120px]">
        <div className="w-full flex flex-col bg-custom-black-title text-white gap-y-2">
          <div className="flex flex-row gap-x-3">
            <p className="text-3xl sm:text-5xl font-foglihten">
              {userData.firstName}
            </p>
            <p className="text-3xl sm:text-5xl font-foglihten">
              {userData.lastName}
            </p>
          </div>
          <p className="text-xs sm:text-lg font-light">{userData.email}</p>
          <p className="text-xs sm:text-lg font-light">{userData.phone}</p>
        </div>
        <Button
          variant="outline"
          className="max-h-7 sm:max-h-10 px-4 sm:px-8"
          onClick={() => handleSignOut()}
        >
          Выйти
        </Button>
      </div>
      <div className="w-full pt-6 px-[30px] sm:px-[60px] lg:px-[120px]">
        <Tabs />
      </div>
    </div>
  );
};

export default ProfileScreen;
