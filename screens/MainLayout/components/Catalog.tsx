import { collection, getDocs, limit, query } from 'firebase/firestore';
import React, { useEffect } from 'react';

import ProductCard from '@/components/ProductCard';
import { db } from '@/firebase/config';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { IProduct } from '@/lib/store/models/Product';
import { setListPreviewProducts } from '@/lib/store/service/productsSlice';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { listPreviewProducts } = useAppSelector((state) => state.products);

  useEffect(() => {
    const q = query(collection(db, 'products'), limit(4));
    getDocs(q).then((res) => {
      res.forEach((doc) => {
        dispatch(setListPreviewProducts(doc.data() as IProduct));
      });
    });
  }, [dispatch]);

  if (listPreviewProducts.length === 0) {
    return null;
  }

  return (
    <div className="px-[30px] sm:px-[120px] py-[60px] bg-custom-black-title flex flex-col justify-center items-center">
      <p className="font-foglihten text-2xl sm:text-3xl text-white text-center">
        Каталог готовых изделий
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-14 justify-center mt-12">
        {listPreviewProducts.map((product, index) => (
          <ProductCard key={index} product={product} isLink />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
