import { object, string } from 'yup';

const estateCreationSchema = object({
  estate_name: string()
    .matches(
      /^[A-Za-z][A-Za-z \+ 0-9]*$/,
      'must not include special characher(s).',
    )
    .required('estate name is required.'),
  estate_address: string()
    .matches(/^[\w\s\-\.,']+$/, 'must match an address')
    .required('estate address is required.'),
  cluster_id: string().required('cluster is required.'),
  facility_manager: string().required('facility manager is required.'),
});

export default estateCreationSchema;
