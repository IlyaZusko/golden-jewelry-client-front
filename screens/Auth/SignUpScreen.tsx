'use client';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import PhoneInput from '@/components/PhoneInput';
import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { auth, db } from '@/firebase/config';
import BackgroundPicture from '@/public/images/background-1.jpg';

import { SignUpSchema } from './utils';

interface ISignIn {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const initialValues: ISignIn = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
  passwordRepeat: '',
};

const SignUpScreen = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isAuthError, setAuthError] = useState<boolean>(false);

  const router = useRouter();
  const formik = useFormik<ISignIn>({
    initialValues,
    validationSchema: SignUpSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { firstName, lastName, email, passwordRepeat, phoneNumber } =
        values;
      createUserWithEmailAndPassword(auth, email, passwordRepeat)
        .then(async (user) => {
          if (auth.currentUser) {
            await sendEmailVerification(auth.currentUser, {
              handleCodeInApp: true,
              url: 'https://goldenjewelry-aa7b8.firebaseapp.com',
            });
            await signOut(auth);
            setOpen(true);
          }
          const userid = user.user.uid;
          await setDoc(doc(db, 'users', userid), {
            firstName,
            lastName,
            email,
            phone: phoneNumber,
            bucket: [],
            id: userid,
          });
        })
        .catch((error) => {
          console.log(error);
          setAuthError(true);
        });
    },
  });

  const { values, submitForm, setFieldValue, errors } = formik;

  const handleInputChange = (field: string, value: string) => {
    setAuthError(false);
    setFieldValue(field, value);
  };

  return (
    <div
      className="w-[100vw] min-h-[100vh] flex flex-col items-center pt-28 relative"
      style={{
        backgroundImage: `url(${BackgroundPicture.src})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <p className="font-foglihten text-xl sm:text-2xl text-white text-center">
        Зарегистрируйте новый аккаунт
      </p>
      <div className="flex flex-col px-7 py-7 bg-custom-black-title rounded-[20px] w-[80%] lg:w-[40%] gap-y-4 mt-8">
        <div className="w-full flex flex-row gap-x-4">
          <TextInput
            type="text"
            value={values.firstName}
            onChange={(v) => handleInputChange('firstName', v)}
            placeholder="Имя"
            error={errors.firstName}
          />
          <TextInput
            type="text"
            value={values.lastName}
            onChange={(v) => handleInputChange('lastName', v)}
            placeholder="Фамилия"
            error={errors.lastName}
          />
        </div>
        <TextInput
          type="email"
          value={values.email}
          onChange={(v) => handleInputChange('email', v)}
          placeholder="Электронная почта"
          error={errors.email}
        />
        <PhoneInput
          value={values.phoneNumber}
          onChange={(v) => handleInputChange('phoneNumber', v)}
        />
        <TextInput
          type="password"
          value={values.password}
          onChange={(v) => handleInputChange('password', v)}
          placeholder="Пароль"
          error={errors.password}
        />
        <TextInput
          type="password"
          value={values.passwordRepeat}
          onChange={(v) => handleInputChange('passwordRepeat', v)}
          placeholder="Пароль еще раз"
          error={errors.passwordRepeat}
        />
        {isAuthError && (
          <p className="text-[#EB5757] text-xs mt-1 -mb-4">
            Почта уже используется
          </p>
        )}
        <Button className="mt-3" onClick={() => submitForm()}>
          Зарегистрироваться
        </Button>
      </div>
      <div className="flex flex-row gap-x-1 text-xs sm:text-base font-light mt-3 text-white">
        <p>У вас уже есть аккаунт?</p>
        <Link
          href={'/auth/sign-in'}
          className="underline hover:text-custom-yellow"
        >
          Войти
        </Link>
      </div>
      <Link
        className="absolute z-30 top-7 left-7 flex flex-row gap-x-2"
        href={'/'}
      >
        <Image
          src={require('@/public/icons/arrow-left-1.svg')}
          alt=""
          width={20}
          height={20}
        />
        <p className="text-base text-white">Вернуться</p>
      </Link>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[300px] custom400:max-w-[400px] sm:max-w-[600px] bg-custom-black-title flex flex-col text-white rounded-[8px]">
          <p className="font-foglihten text-xl sm:text-2xl">
            Письмо отправлено
          </p>
          <div className="w-full h-[1px] bg-gray-500" />
          <p className="text-sm font-light text-gray-400">
            Мы отправили на вашу почту письмо с ссылкой для подтверждения.
            Перейдите по ней прежде чем войти в аккаунт.
          </p>
          <div className="flex flex-row justify-end gap-x-4">
            <Button
              size="small"
              onClick={() => {
                router.push('/auth/sign-in');
                setOpen(false);
              }}
            >
              Понятно
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SignUpScreen;
