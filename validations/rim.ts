import * as yup from 'yup';

export default yup.object().shape({
  diameter: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  holes: yup
    .mixed()
    .nullable(false)
    .required('Obavezno'),
  width: yup
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
  et: yup
    .number()
    .positive()
    .integer()
    .lessThan(100),
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
