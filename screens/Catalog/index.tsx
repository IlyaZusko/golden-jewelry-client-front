'use client';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

import MainAppHeader from '@/components/MainAppHeader';
import ProductCard from '@/components/ProductCard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { ProductType } from '@/lib/constants';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { IProduct } from '@/lib/store/models/Product';
import {
  clearListProducts,
  setListProducts,
} from '@/lib/store/service/productsSlice';

const CatalogScreen = () => {
  const user = useUser();
  const dispatch = useAppDispatch();
  const { listProducts } = useAppSelector((state) => state.products);

  const [typeFilter, setTypeFilter] = useState<string>(ProductType.All);

  useEffect(() => {
    dispatch(clearListProducts());
    const q =
      typeFilter === ProductType.All
        ? query(collection(db, 'products'))
        : query(collection(db, 'products'), where('type', '==', typeFilter));
    getDocs(q).then((res) => {
      res.forEach((doc) => {
        dispatch(setListProducts(doc.data() as IProduct));
      });
    });
  }, [dispatch, typeFilter]);

  return (
    <div>
      <MainAppHeader isAuth={user} />
      <div className="w-full flex flex-col items-center justify-center pt-[128px] ">
        <p className="font-foglihten text-3xl">Каталог готовых изделий</p>
        <div className="flex flex-row px-[30px] sm:px-[60px] lg:px-[120px] gap-x-4 items-center pt-5">
          <p className="text-custom-black-title text-base">Фильтры:</p>
          <Select onValueChange={setTypeFilter} defaultValue={typeFilter}>
            <SelectTrigger className="w-full min-w-[180px]">
              <SelectValue placeholder="Размер" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ProductType.All}>Все изделия</SelectItem>
              <SelectItem value={ProductType.Ring}>Кольца</SelectItem>
              <SelectItem value={ProductType.Necklace}>Ожерелья</SelectItem>
              <SelectItem value={ProductType.Pendant}>Кулоны</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full min-h-[70vh] bg-custom-black-title py-10 px-[30px] sm:px-[60px] lg:px-[120px] mt-8">
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
