import { object, string } from 'yup';

const estateCreationSchema = object({
  estate_name: string()
    .matches(
      /^[A-Za-z][A-Za-z + 0-9]*$/,
      'must not include special characher(s).',
    )
    .min(2, 'minimum 20 character allowed')
    .max(20, 'maximum 20 character allowed')
    .required('estate name is required.'),
  estate_address: string()
    .matches(/^[\w\s\-.,']+$/, 'must match an address')
    .min(2, 'minimum 20 character allowed')
    .max(50, 'maximum 20 character allowed')
    .required('estate address is required.'),
  cluster_id: string().required('cluster is required.'),
  facility_manager: string().required('facility manager is required.'),
});

export default estateCreationSchema;
