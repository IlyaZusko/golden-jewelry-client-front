'use client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import { auth } from '@/firebase/config';
import BackgroundPicture from '@/public/images/background-1.jpg';

import { SignInSchema } from './utils';

interface ISignIn {
  email: string;
  password: string;
}

const initialValues: ISignIn = {
  email: 'ilyazusko1@gmail.com',
  password: 'Gjgeufq1',
};

const SignInScreen = () => {
  const router = useRouter();
  const formik = useFormik<ISignIn>({
    initialValues,
    validationSchema: SignInSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { email, password } = values;
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log('Success', res);
          router.push('/profile');
        })
        .catch((error) => console.log(error.message));
    },
  });

  const { values, submitForm, setFieldValue, errors } = formik;

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
        Войдите в свой аккаунт
      </p>
      <div className="flex flex-col px-7 py-7 bg-custom-black-title rounded-[20px] w-[80%] lg:w-[40%] gap-y-4 mt-8">
        <TextInput
          type="email"
          value={values.email}
          onChange={(v) => setFieldValue('email', v)}
          placeholder="Электронная почта"
          error={errors.email}
        />
        <TextInput
          type="password"
          value={values.password}
          onChange={(v) => setFieldValue('password', v)}
          placeholder="Пароль"
          error={errors.password}
        />
        <Button className="mt-3" onClick={() => submitForm()}>
          Войти
        </Button>
      </div>
      <div className="flex flex-row gap-x-1 text-xs sm:text-base font-light mt-3 text-white">
        <p>У вас ещё нет аккаунта?</p>
        <Link
          href={'/auth/sign-up'}
          className="underline hover:text-custom-yellow"
        >
          Зарегистрироваться
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
    </div>
  );
};

export default SignInScreen;
