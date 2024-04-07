'use client';
import { doc, onSnapshot } from 'firebase/firestore';
import { ReactNode } from 'react';

import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch } from '@/lib/store';
import { IFirestoreUser } from '@/lib/store/models/User';
import { setUserState } from '@/lib/store/service/userSlice';

const AppLayout = ({ children }: { children: ReactNode }) => {
  const user = useUser();
  const dispatch = useAppDispatch();
  if (user) {
    onSnapshot(doc(db, 'users', user.uid), (doc) => {
      const data = doc.data() as IFirestoreUser;
      dispatch(setUserState(data));
    });
  }
  return children;
};

export default AppLayout;
