/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TabsContent } from '@/components/ui/tabs';

const TabContentOrders = () => {
  return (
    <TabsContent value="orders" className="pt-4 pb-12">
      <p className="font-foglihten text-xl sm:text-2xl pb-4 pl-4">
        Список ваших заказов
      </p>
      <Table>
        <TableHeader>
          <TableRow className="text-slate-600">
            <TableHead className="w-[200px]">Номер заказа</TableHead>
            <TableHead>Товары</TableHead>
            <TableHead>Сумма, BYN</TableHead>
            <TableHead>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>№ 001</TableCell>
            <TableCell>Серьги "Роскошь", Кольцо "Император"</TableCell>
            <TableCell>230</TableCell>
            <TableCell>
              <div className="px-3 py-1 max-w-max bg-custom-black-title rounded-full text-white font-light">
                Отправлено
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>№ 001</TableCell>
            <TableCell>Серьги "Роскошь", Кольцо "Император"</TableCell>
            <TableCell>230</TableCell>
            <TableCell>
              <div className="px-3 py-1 max-w-max bg-custom-black-title rounded-full text-white font-light">
                Отправлено
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>№ 001</TableCell>
            <TableCell>Серьги "Роскошь", Кольцо "Император"</TableCell>
            <TableCell>230</TableCell>
            <TableCell>
              <div className="px-3 py-1 max-w-max bg-custom-black-title rounded-full text-white font-light">
                Отправлено
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>№ 001</TableCell>
            <TableCell>Серьги "Роскошь", Кольцо "Император"</TableCell>
            <TableCell>230</TableCell>
            <TableCell>
              <div className="px-3 py-1 max-w-max bg-custom-black-title rounded-full text-white font-light">
                Отправлено
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>№ 001</TableCell>
            <TableCell>Серьги "Роскошь", Кольцо "Император"</TableCell>
            <TableCell>230</TableCell>
            <TableCell>
              <div className="px-3 py-1 max-w-max bg-custom-black-title rounded-full text-white font-light">
                Отправлено
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TabsContent>
  );
};

export default TabContentOrders;
