import { useFormik } from 'formik';
import React from 'react';

import PhoneInput from '@/components/PhoneInput';
import TextInput from '@/components/TextInput';
import { Button } from '@/components/ui/button';

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
  const formik = useFormik<IContactForm>({
    initialValues,
    validationSchema: ContactFormSchema,
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
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
      />
      <PhoneInput
        value={values.phoneNumber}
        onChange={(v) => setFieldValue('phoneNumber', v)}
        error={errors.phoneNumber}
      />
      <TextInput
        placeholder="Задайте свой вопрос"
        value={values.message}
        onChange={(v) => setFieldValue('message', v)}
        error={errors.message}
      />
      <Button onClick={() => submitForm()} className="h-10">
        Отправить
      </Button>
    </div>
  );
};

export default ContactForm;
