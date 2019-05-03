import * as yup from 'yup';

export default yup.object().shape({
  width: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  height: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  diameter: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  type: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  brand: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  condition: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  price: yup
    .number()
    .positive()
    .integer()
    .required('Obavezno'),
  // User
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
