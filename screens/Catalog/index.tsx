'use client';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react';

import MainAppHeader from '@/components/MainAppHeader';
import ProductCard from '@/components/ProductCard';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { IProduct } from '@/lib/store/models/Product';
import { setListProducts } from '@/lib/store/service/productsSlice';

const CatalogScreen = () => {
  const user = useUser();
  const dispatch = useAppDispatch();
  // const [products, setProducts] = useState<IProduct[]>([]);
  const { listProducts } = useAppSelector((state) => state.products);

  useEffect(() => {
    getDocs(collection(db, 'products')).then((res) => {
      res.forEach((doc) => {
        dispatch(setListProducts(doc.data() as IProduct));
      });
    });
  }, [dispatch]);

  if (listProducts.length === 0) {
    return null;
  }

  return (
    <div>
      <MainAppHeader isAuth={user} />
      <div className="w-full flex flex-col items-center justify-center pt-[128px]">
        <p className="font-foglihten text-3xl">Каталог готовых изделий</p>
        <div className="w-full bg-custom-black-title py-10 px-[30px] sm:px-[60px] lg:px-[120px] mt-8">
          <div className="flex flex-wrap gap-x-10 gap-y-14 justify-center">
            {listProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogScreen;
