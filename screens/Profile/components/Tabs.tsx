import React from 'react';

import {
  TabsContent,
  TabsList,
  Tabs as TabsMain,
  TabsTrigger,
} from '@/components/ui/tabs';

import TabContentOrders from './TabContentOrders';

const Tabs = () => {
  return (
    <TabsMain defaultValue="orders">
      <TabsList className="w-full">
        <TabsTrigger value="orders" className="flex-1 text-xs sm:text-sm">
          Заказы
        </TabsTrigger>
        <TabsTrigger value="busket" className="flex-1 text-xs sm:text-sm">
          Корзина
        </TabsTrigger>
        <TabsTrigger value="account" className="flex-1 text-xs sm:text-sm">
          Аккаунт
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex-1 text-xs sm:text-sm">
          Настройки
        </TabsTrigger>
      </TabsList>
      <TabContentOrders />
      <TabsContent value="password">Change your password here.</TabsContent>
    </TabsMain>
  );
};

export default Tabs;
