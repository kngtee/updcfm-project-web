import { object, string } from 'yup';

const phoneRegExp = /[0-9]{11}/;
const emailRegExp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const staffCreationSchema = object({
  first_name: string()
    .matches(/^[a-zA-Z]+$/, 'must not include a special character(s).')
    .required('first name is required.'),
  last_name: string()
    .matches(/^[a-zA-Z]+$/, 'must not include a special character(s).')
    .required('last name is required.'),
  email: string()
    .matches(emailRegExp, 'must be a actual email.')
    .required('email is required.'),
  phone_number: string()
    .matches(phoneRegExp, 'must be an actual phone number.')
    .required('phone number is required.'),
  role: string().required('role is required.'),
});

export default staffCreationSchema;
