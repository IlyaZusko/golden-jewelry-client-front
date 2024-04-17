import * as Yup from 'yup';

export const EditProfileInfo = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Должно содержать минимум 2 символа')
    .max(50, 'Должно быть короче 50 символов')
    .required('Обязательное поле*'),
  lastName: Yup.string()
    .min(2, 'Должно содержать минимум 2 символа')
    .max(50, 'Должно быть короче 50 символов')
    .required('Обязательное поле*'),
  phone: Yup.string().required('Обязательное поле*'),
});
