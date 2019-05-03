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
  password: yup
    .string()
    .min(8, 'Lozinka mora imati minimum 8 karaktera!')
    .required('Lozinka je obavezna!'),
  reenterPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Lozinke se ne poklapaju')
    .required('Ponovljena lozinka je obavezna'),
});
