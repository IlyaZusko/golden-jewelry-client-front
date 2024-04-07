'use client';
import { signOut } from 'firebase/auth';
import React from 'react';

import { auth } from '@/firebase/config';
import { useAppSelector } from '@/lib/store';

const ProfileScreen = () => {
  const { userData } = useAppSelector((state) => state.user);

  if (!userData.email) {
    return null;
  }
  return (
    <div>
      <div className="flex flex-row gap-x-2">
        Имя:
        <p>{userData.firstName}</p>
        <p>{userData.lastName}</p>
      </div>
      <div className="flex flex-row gap-x-2">
        Email:
        <p>{userData.email}</p>
      </div>

      <button onClick={() => signOut(auth)}>sign out</button>
    </div>
  );
};

export default ProfileScreen;
