import * as yup from 'yup';

export default yup.object().shape({
  email: yup
    .string()
    .email('Email nije validan!')
    .required('Email je obavezan!'),
  password: yup
    .string()
    .min(8, 'Lozinka mora imati minimum 8 karaktera!')
    .required('Lozinka je obavezna!'),
});
