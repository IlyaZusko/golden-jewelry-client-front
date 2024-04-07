'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import { auth, db } from '@/firebase/config';
import BackgroundPicture from '@/public/images/background-1.jpg';

import { SignUpSchema } from './utils';

interface ISignIn {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

const initialValues: ISignIn = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordRepeat: '',
};

const SignUpScreen = () => {
  const router = useRouter();
  const formik = useFormik<ISignIn>({
    initialValues,
    validationSchema: SignUpSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { firstName, lastName, email, passwordRepeat } = values;
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        passwordRepeat,
      );

      const userid = user.user.uid;
      await setDoc(doc(db, 'users', userid), {
        firstName,
        lastName,
        email,
      });
      router.push('/auth/sign-in');
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
        Зарегистрируйте новый аккаунт
      </p>
      <div className="flex flex-col px-7 py-7 bg-custom-black-title rounded-[20px] w-[80%] lg:w-[40%] gap-y-4 mt-8">
        <div className="w-full flex flex-row gap-x-4">
          <TextInput
            type="text"
            value={values.firstName}
            onChange={(v) => setFieldValue('firstName', v)}
            placeholder="Имя"
            error={errors.firstName}
          />
          <TextInput
            type="text"
            value={values.lastName}
            onChange={(v) => setFieldValue('lastName', v)}
            placeholder="Фамилия"
            error={errors.lastName}
          />
        </div>
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
        <TextInput
          type="password"
          value={values.passwordRepeat}
          onChange={(v) => setFieldValue('passwordRepeat', v)}
          placeholder="Пароль еще раз"
          error={errors.passwordRepeat}
        />
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
    </div>
  );
};

export default SignUpScreen;