import { doc, updateDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import _ from 'lodash';
import React from 'react';

import PhoneInput from '@/components/PhoneInput';
import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { setUserState } from '@/lib/store/service/userSlice';

import { EditProfileInfo } from '../utils';

interface IAccountInfoEdit {
  firstName: string;
  lastName: string;
  phone: string;
}

const AccountInfoEdit = () => {
  const user = useUser();
  const dispatch = useAppDispatch();
  const {
    firstName: userFirstName,
    lastName: userLastName,
    phone: userPhone,
  } = useAppSelector((state) => state.user.userData);
  const { userData } = useAppSelector((state) => state.user);

  const initialValues: IAccountInfoEdit = {
    firstName: userFirstName || '',
    lastName: userLastName || '',
    phone: userPhone || '',
  };

  const formik = useFormik<IAccountInfoEdit>({
    initialValues,
    validationSchema: EditProfileInfo,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { firstName, lastName, phone } = values;
      if (user) {
        await updateDoc(doc(db, 'users', user.uid), {
          firstName,
          lastName,
          phone,
        });
        dispatch(
          setUserState({
            ...userData,
            firstName,
            lastName,
            phone,
          }),
        );
      }
    },
  });

  const { values, submitForm, setFieldValue, errors } = formik;

  const isSaveDisabled = _.isEqual(values, initialValues);

  return (
    <div className="w-full sm:max-w-[40vw] bg-custom-black-title rounded-[16px] py-4 px-6 flex flex-col gap-y-4">
      <p className="text-white font-medium">Личная информация</p>
      <div className="flex flex-col sm:flex-row gap-x-4 gap-y-2">
        <TextInput
          onChange={(v) => setFieldValue('firstName', v)}
          value={values.firstName}
          placeholder="Имя"
          error={errors.firstName}
        />
        <TextInput
          onChange={(v) => setFieldValue('lastName', v)}
          value={values.lastName}
          placeholder="Фамилия"
          error={errors.lastName}
        />
      </div>
      <PhoneInput
        onChange={(v) => setFieldValue('phone', v)}
        value={values.phone}
        error={errors.phone}
      />
      <Button
        onClick={() => submitForm()}
        size="small"
        className="max-w-32"
        disabled={isSaveDisabled}
      >
        Сохранить
      </Button>
    </div>
  );
};

export default AccountInfoEdit;
