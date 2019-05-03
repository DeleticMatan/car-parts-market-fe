import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Email nije validan!')
    .required('Email je obavezan!'),
  name: yup.string().required('Ime je obavezno!'),
  city: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  phone: yup.number().required('Ime je obavezno!'),
});
