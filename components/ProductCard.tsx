import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import Image from 'next/image';
import React from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { IProduct } from '@/lib/store/models/Product';
import {
  removeFromBucket,
  setListBucket,
} from '@/lib/store/service/productsSlice';

import { Button } from './ui/button';

interface IProductCard {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCard) => {
  const user = useUser();
  const dispatch = useAppDispatch();
  const { listBucket } = useAppSelector((state) => state.products);

  const handleAddProductToBusket = async () => {
    if (user) {
      const usersRef = doc(db, 'users', user.uid);
      await updateDoc(usersRef, {
        bucket: arrayUnion(product.id),
      });
      dispatch(setListBucket(product));
    }
  };

  const handleRemoveProductFromBusket = async () => {
    if (user) {
      const usersRef = doc(db, 'users', user.uid);
      await updateDoc(usersRef, {
        bucket: arrayRemove(product.id),
      });
      dispatch(removeFromBucket(product));
    }
  };

  return (
    <div className="max-w-[260px]">
      <Image
        loader={() => product.image}
        src={product.image}
        alt=""
        width={260}
        height={260}
        className="rounded-xl w-[260px] h-[260px] bg-white"
      />
      <p className="font-foglihten text-xl text-white mt-5">{product.name}</p>
      <p className="text-xs font-light text-white mt-1">
        {product.description}
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={'default'} className="w-full py-2 mt-4">
            {product.price} BYN
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-[600px] bg-custom-white">
          <div className="flex flex-row gap-x-6">
            <Image
              loader={() => product.image}
              src={product.image}
              alt=""
              width={400}
              height={400}
              className="rounded-2xl w-[250px] h-[250px] bg-white"
            />
            <div className="flex flex-col pt-3 gap-y-2">
              <p className="text-xl  font-medium">{product.name}</p>
              <p className="text-2xl font-medium">{product.price} BYN</p>
              <div className="flex flex-col gap-x-2 mt-3">
                {listBucket.some((item) => item.id === product.id) ? (
                  <Button
                    size="small"
                    variant="delete"
                    className="border-2"
                    onClick={() => handleRemoveProductFromBusket()}
                  >
                    Удалить из корзины
                  </Button>
                ) : (
                  <Button
                    size="small"
                    variant="default"
                    onClick={() => handleAddProductToBusket()}
                    disabled={!user}
                    className="max-w-[100px]"
                  >
                    В корзину
                  </Button>
                )}
                {!user && (
                  <p className="text-[#EB5757] text-xs mt-1">
                    Для добавления товара в корзину вам нужно войти в аккаунт
                  </p>
                )}
              </div>
              <p className="text-xs font-light mt-1">{product.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;
