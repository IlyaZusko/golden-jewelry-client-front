import { addDoc, collection } from 'firebase/firestore';
import { useFormik } from 'formik';
import React, { useState } from 'react';

import PhoneInput from '@/components/PhoneInput';
import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';
import { db } from '@/firebase/config';
import useUser from '@/firebase/useUser';

import { ContactFormSchema } from '../utils';

interface IContactForm {
  name: string;
  phoneNumber: string;
  message: string;
}

const initialValues = {
  name: '',
  phoneNumber: '',
  message: '',
};

const ContactForm = () => {
  const user = useUser();
  const [isSent, setIsSent] = useState(false);
  const formik = useFormik<IContactForm>({
    initialValues,
    validationSchema: ContactFormSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (!isSent) {
        const docRef = await addDoc(collection(db, 'callRequests'), {
          userName: values.name,
          userPhone: values.phoneNumber,
          userMessage: values.message,
          isAuthUser: user ? true : false,
        });
        if (docRef.id) {
          setIsSent(true);
        }
      }
    },
  });

  const { values, submitForm, setFieldValue, errors } = formik;
  return (
    <div className="flex flex-col sm:flex-row gap-5 w-full mt-10">
      <TextInput
        placeholder="Ваше имя"
        value={values.name}
        onChange={(v) => setFieldValue('name', v)}
        error={errors.name}
        disabled={isSent}
      />
      <PhoneInput
        value={values.phoneNumber}
        onChange={(v) => setFieldValue('phoneNumber', v)}
        error={errors.phoneNumber}
        disabled={isSent}
      />
      <TextInput
        placeholder="Задайте свой вопрос"
        value={values.message}
        onChange={(v) => setFieldValue('message', v)}
        error={errors.message}
        disabled={isSent}
      />
      <Button onClick={() => submitForm()} className="h-10" disabled={isSent}>
        {isSent ? 'Отправлено' : 'Отправить'}
      </Button>
    </div>
  );
};

export default ContactForm;
