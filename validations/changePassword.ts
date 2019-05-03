import * as yup from 'yup';

export default yup.object().shape({
  password: yup
    .string()
    .min(8, 'Nova lozinka mora imati minimum 8 karaktera!')
    .required('Nova lozinka je obavezna!'),
  reenterPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Lozinke se ne poklapaju')
    .required('Ponovljena nova lozinka je obavezna'),
});
