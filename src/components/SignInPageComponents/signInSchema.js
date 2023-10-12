import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email обов'язковий")
    .email('Введіть коректний email')
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Введіть коректний email'
    ),
  password: yup
    .string()
    .required("Пароль обов'язковий")
    .min(4, 'Пароль повинен містити принаймні 4 символи'),
});

export default schema;
