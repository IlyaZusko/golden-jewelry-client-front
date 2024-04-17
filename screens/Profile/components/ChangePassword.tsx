import {
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { useFormik } from 'formik';
import React from 'react';

import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/lib/store';

interface IChangePassword {
  currentPassword: string;
  newPassword: string;
}
const initialValues: IChangePassword = {
  currentPassword: '',
  newPassword: '',
};

const ChangePassword = () => {
  const { userData } = useAppSelector((state) => state.user);

  const formik = useFormik<IChangePassword>({
    initialValues,
    // validationSchema: EditProfileInfo,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      const credential = EmailAuthProvider.credential(
        userData.email,
        'Gjgeufq1',
      );
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        reauthenticateWithCredential(user, credential)
          .then(() => {
            updatePassword(user, 'Gjgeufq111')
              .then(() => {
                console.log('Пароль обновлен успешно');
              })
              .catch((error) => {
                console.log('Ошибка при обновлении пароля:', error);
              });
          })
          .catch((error) => {
            console.log('Ошибка при переаутентификации:', error);
          });
      }
    },
  });

  const { values, submitForm, setFieldValue, errors } = formik;
  const isSaveDisabled =
    values.currentPassword.length === 0 && values.newPassword.length === 0;
  return (
    <div className="w-full bg-custom-black-title rounded-[16px] py-4 px-6 flex flex-col gap-y-4">
      <p className="text-white font-medium">Смена пароля</p>
      <TextInput
        type="password"
        onChange={(v) => setFieldValue('currentPassword', v)}
        value={values.currentPassword}
        placeholder="Пароль"
        error={errors.currentPassword}
      />
      <TextInput
        type="password"
        onChange={(v) => setFieldValue('newPassword', v)}
        value={values.newPassword}
        placeholder="Новый пароль"
        error={errors.newPassword}
      />
      <Button
        onClick={() => submitForm()}
        size="small"
        className="max-w-32"
        disabled={isSaveDisabled}
      >
        Обновить
      </Button>
    </div>
  );
};

export default ChangePassword;
