import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import DatePicker from '@/components/DatePicker';
import PhoneInput from '@/components/PhoneInput';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { OrderStatuses } from '@/lib/constants';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { setListOrders } from '@/lib/store/service/ordersSlice';
import { clearBucket } from '@/lib/store/service/productsSlice';

interface IModalPlaceOrder {
  recieveDate: Date | undefined;
  phoneNumber: string;
}

const wait = () => new Promise((resolve) => setTimeout(resolve, 500));

const ModalPlaceOrder = () => {
  const { listBucket } = useAppSelector((state) => state.products);
  const { userData } = useAppSelector((state) => state.user);
  const user = useUser();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);

  const initialValues: IModalPlaceOrder = {
    recieveDate: undefined,
    phoneNumber: userData.phone || '',
  };

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

  const handleClearBucket = async () => {
    if (user) {
      const usersRef = doc(db, 'users', user.uid);
      await updateDoc(usersRef, {
        bucket: [],
      });
      dispatch(clearBucket());
    }
  };

  const formik = useFormik<IModalPlaceOrder>({
    initialValues,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { phoneNumber, recieveDate } = values;
      if (recieveDate && user) {
        const day = recieveDate.getDate();
        const month = recieveDate.getMonth() + 1;
        const year = recieveDate.getFullYear();
        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        const dateString = `${formattedDay}.${formattedMonth}.${year}`;

        const orderId = `${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}`;
        const docRef = await addDoc(collection(db, 'orders'), {
          userId: user.uid,
          productsNames: listBucket.map((product) => product.name),
          productsIds: listBucket.map((product) => product.id),
          totalPrice: getTotalBucketPrice(),
          recieveDateRequest: dateString,
          userPhoneNumber: phoneNumber,
          status: OrderStatuses.InProcessing,
          orderId,
          id: '',
        });
        await updateDoc(doc(db, 'orders', docRef.id), {
          id: docRef.id,
        });
        dispatch(
          setListOrders({
            userId: user.uid,
            productsNames: listBucket.map((product) => product.name),
            productsIds: listBucket.map((product) => product.id),
            totalPrice: getTotalBucketPrice(),
            recieveDateRequest: dateString,
            userPhoneNumber: phoneNumber,
            status: OrderStatuses.InProcessing,
            orderId,
            id: docRef.id,
          }),
        );
        handleClearBucket();
        wait().then(() => setOpen(false));
      } else {
        setFieldError('recieveDate', 'Обязательное поле*');
      }
    },
  });

  const { values, submitForm, setFieldValue, errors, setFieldError } = formik;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="small" disabled={listBucket.length === 0}>
          Заказать
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[300px] custom400:max-w-[400px] sm:max-w-[600px] bg-custom-black-title flex flex-col text-white rounded-[8px]">
        <p className="font-foglihten text-xl sm:text-2xl">Оформление заказа</p>
        <div className="w-full flex flex-col sm:flex-row gap-y-4 gap-x-4">
          <DatePicker
            selected={values.recieveDate}
            setSelected={(v) => setFieldValue('recieveDate', v)}
            error={errors.recieveDate}
          />
          <PhoneInput
            value={values.phoneNumber}
            onChange={(v) => setFieldValue('phoneNumber', v)}
            disabled
            forForm
          />
        </div>
        <div className="w-full h-[1px] bg-gray-500" />
        <p className="text-sm font-medium">
          Товары:
          <p className="font-light">
            {listBucket.map((product) => product.name).join(', ')}
          </p>
        </p>
        <p className="text-sm font-medium">
          Сумма к оплате:
          <p className="font-light">{getTotalBucketPrice()} BYN</p>
        </p>
        <p className="text-xs font-light text-gray-400">
          После подтверждения заказа наш менеджер свяжется с вами чтобы уточнить
          остальные детали доставки и оплаты
        </p>
        <div className="flex flex-row justify-end gap-x-4">
          <DialogClose>
            <Button size="small" variant="outline">
              Отмена
            </Button>
          </DialogClose>

          <Button size="small" onClick={() => submitForm()}>
            Оформить
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalPlaceOrder;
