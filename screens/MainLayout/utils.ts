import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, 'Должно быть короче 50 символов')
    .required('Обязательное поле*'),
  phoneNumber: Yup.string().required('Обязательное поле*'),
  message: Yup.string()
    .max(50, 'Должно быть короче 50 символов')
    .required('Обязательное поле*'),
});
