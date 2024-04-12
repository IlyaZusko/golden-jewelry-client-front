/* eslint-disable react/no-unescaped-entities */
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { IOrder } from '@/lib/store/models/Orders';
import { setListOrders } from '@/lib/store/service/ordersSlice';

const TabContentOrders = () => {
  const user = useUser();
  const dispatch = useAppDispatch();

  const { listOrders } = useAppSelector((state) => state.orders);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'orders'),
        where('userId', '==', user.uid),
      );
      getDocs(q).then((res) => {
        const newListOrders: IOrder[] = [];
        res.forEach((doc) => {
          newListOrders.push(doc.data() as IOrder);
        });
        newListOrders.forEach((item) => {
          dispatch(setListOrders(item));
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <TabsContent value="orders" className="pt-4 pb-12">
      <p className="font-foglihten text-xl sm:text-2xl pb-4 pl-4">
        Список ваших заказов
      </p>
      {listOrders && listOrders.length === 0 ? (
        <div className="w-full flex flex-row justify-center">
          <p className="text-base font-light max-w-[270px] text-center">
            Вы еще не совершили ни один заказ
          </p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="text-slate-600">
              <TableHead className="w-[200px]">ID заказа</TableHead>
              <TableHead>Товары</TableHead>
              <TableHead>Сумма, BYN</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listOrders &&
              listOrders.length > 0 &&
              listOrders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.orderId}</TableCell>
                  <TableCell>{order.productsNames.join(', ')}</TableCell>
                  <TableCell>{order.totalPrice}</TableCell>
                  <TableCell>
                    <div className="px-3 py-1 max-w-max bg-custom-black-title rounded-full text-white font-light">
                      {order.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
    </TabsContent>
  );
};

export default TabContentOrders;
