import {
  arrayRemove,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { TabsContent } from '@/components/ui/tabs';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { IProduct } from '@/lib/store/models/Product';
import {
  clearBucket,
  removeFromBucket,
  setListBucket,
} from '@/lib/store/service/productsSlice';
import { cn } from '@/lib/utils';

import ModalPlaceOrder from './ModalPlaceOrder';

const TabContentBucket = () => {
  const user = useUser();
  const dispatch = useAppDispatch();

  const { bucket } = useAppSelector((state) => state.user.userData);
  const { listBucket } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (bucket && bucket.length > 0) {
      const q = query(collection(db, 'products'), where('id', 'in', bucket));
      getDocs(q).then((res) => {
        const newBucketItems: IProduct[] = [];
        res.forEach((doc) => {
          newBucketItems.push(doc.data() as IProduct);
        });
        newBucketItems.forEach((item) => {
          dispatch(setListBucket(item));
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bucket]);

  const getTotalBucketPrice = () => {
    if (listBucket.length > 0) {
      return listBucket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0,
      );
    } else {
      return 0;
    }
  };

  const handleRemoveProductFromBusket = async (product: IProduct) => {
    if (user) {
      const usersRef = doc(db, 'users', user.uid);
      await updateDoc(usersRef, {
        bucket: arrayRemove(product.id),
      });
      dispatch(removeFromBucket(product));
    }
  };

  const handleClearBucket = async () => {
    if (user) {
      const usersRef = doc(db, 'users', user.uid);
      await updateDoc(usersRef, {
        bucket: [],
      });
      dispatch(clearBucket());
    }
  };

  return (
    <TabsContent value="bucket" className="pt-4 pb-12">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-4 px-4">
        <p className="font-foglihten text-xl sm:text-2xl pb-3 sm:pb-0">
          Корзина
        </p>
        <div className="h-full flex flex-col sm:flex-row items-center gap-x-4 gap-y-3">
          <p className="font-light text-sm flex flex-row items-center gap-x-1">
            Общая сумма корзины:
            <p className="font-medium">{getTotalBucketPrice()}</p>BYN
          </p>
          <ModalPlaceOrder />
          <Button
            size="small"
            variant="outlineRevert"
            disabled={listBucket.length === 0}
            onClick={() => handleClearBucket()}
          >
            Очистить корзину
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        {listBucket.length === 0 && (
          <div className="w-full flex justify-center pt-8">
            <p className="text-base font-light max-w-[270px] text-center">
              Ваша корзина пуста. Вы можете добавить товары в корзину в
              <Link href="/catalog" className="underline pl-1">
                Каталоге
              </Link>
            </p>
          </div>
        )}
        {listBucket.map((product, index) => (
          <div
            className={cn(
              'w-full flex flex-col sm:flex-row justify-between items-start border-b pb-3 px-4',
              index === 0 ? 'border-t pt-3' : '',
            )}
            key={index}
          >
            <div className="w-full flex flex-col sm:flex-row gap-x-5 gap-y-4 items-center">
              <Image
                loader={() => product.image}
                src={product.image}
                alt=""
                width={140}
                height={140}
                className="rounded-xl w-[200px] h-[200px] bg-white"
              />
              <div className="flex flex-col gap-y-2">
                <p className="font-medium text-sm sm:text-lg">{product.name}</p>
                <p className="font-medium text-sm sm:text-lg">
                  {product.price} BYN
                </p>
                <p className="font-light text-xs sm:text-sm">
                  {product.description}
                </p>
              </div>
            </div>
            <Button
              size="circle"
              variant="delete"
              className="border-2 self-end sm:self-start w-full sm:w-auto mt-4 sm:mt-0"
              onClick={() => handleRemoveProductFromBusket(product)}
            >
              <Image
                src={require('@/public/icons/trash-1.svg')}
                alt=""
                width={22}
                height={22}
              />
            </Button>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};

export default TabContentBucket;
