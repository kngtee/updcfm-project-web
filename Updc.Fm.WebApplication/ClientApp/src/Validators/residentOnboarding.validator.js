import { object, string } from 'yup';

const phoneRegExp = /[0-9]{11}/;
const emailRegExp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const residentOnboadingSchema = object({
  firstName: string()
    .matches(/^[a-zA-Z]+$/, 'must not have any special characters.')
    .min(2, 'minimum 20 character allowed')
    .max(20, 'maximum 20 character allowed')
    .required('Firstname is required.'),
  lastName: string()
    .matches(/^[a-zA-Z]+$/, 'must not have any special characters.')
    .required('Lastname is required.'),
  email: string()
    .email('must be a valid email.')
    .matches(emailRegExp, 'Must be an email.')
    .min(2, 'minimum 20 character allowed')
    .max(30, 'maximum 20 character allowed')
    .required('Email is required.'),
  phoneNumber: string()
    .matches(phoneRegExp, 'must follow this partern e.g. 08000000000.')
    .min(10)
    .max(11)
    .required('Phone Number is required.'),
  unitId: string().required('Unit Id is required.'),
});

export default residentOnboadingSchema;
