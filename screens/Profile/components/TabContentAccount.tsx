import React from 'react';

import { TabsContent } from '@/components/ui/tabs';

import AccountInfoEdit from './AccountInfoEdit';
// import ChangePassword from './ChangePassword';

const TabContentAccount = () => {
  return (
    <TabsContent value="account" className="pt-4 pb-12 px-4">
      <p className="font-foglihten text-xl sm:text-2xl pb-3">
        Настройки аккаунта
      </p>
      <div className="w-full flex flex-col sm:flex-row gap-7">
        <AccountInfoEdit />
        {/* <ChangePassword /> */}
      </div>
    </TabsContent>
  );
};

export default TabContentAccount;
