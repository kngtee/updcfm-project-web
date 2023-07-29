import { object, string } from 'yup';

const clusterCreationSchema = object({
  clusterName: string()
    .matches(/^[a-zA-Z0-9]+$/, 'must not include a special character(s).')
    .min(2, 'minimum 20 character allowed')
    .max(20, 'maximum 20 character allowed')
    .required('cluster name is required.'),
  clusterManager: string().required('cluster manager is required.'),
});

export default clusterCreationSchema;
