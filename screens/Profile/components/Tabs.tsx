import React from 'react';

import { TabsList, Tabs as TabsMain, TabsTrigger } from '@/components/ui/tabs';

import TabContentAccount from './TabContentAccount';
import TabContentBucket from './TabContentBucket';
import TabContentOrders from './TabContentOrders';

const Tabs = () => {
  return (
    <TabsMain defaultValue="bucket">
      <TabsList className="w-full">
        <TabsTrigger value="orders" className="flex-1 text-xs sm:text-sm">
          Заказы
        </TabsTrigger>
        <TabsTrigger value="bucket" className="flex-1 text-xs sm:text-sm">
          Корзина
        </TabsTrigger>
        <TabsTrigger value="account" className="flex-1 text-xs sm:text-sm">
          Аккаунт
        </TabsTrigger>
      </TabsList>
      <TabContentOrders />
      <TabContentBucket />
      <TabContentAccount />
    </TabsMain>
  );
};

export default Tabs;
