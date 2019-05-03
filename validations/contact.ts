import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Ime je obavezno!'),
  email: yup
    .string()
    .email('Email nije validan!')
    .required('Email je obavezan!'),
  message: yup.string().required('Poruka je obavezna!'),
});
