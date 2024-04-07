'use client';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

import Spinner from '@/components/Spinner';
import useUser from '@/firebase/useUser';

const ProfileLayout = ({ children }: { children: ReactNode }) => {
  const user = useUser();
  const router = useRouter();

  if (user === false) {
    return (
      <div className="text-center relative">
        <Spinner />
        <div className="blur-xl">{children}</div>
      </div>
    );
  } else if (!user) {
    router.push('/');
    return null;
  } else {
    return children;
  }
};

export default ProfileLayout;
