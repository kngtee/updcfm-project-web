import { object, string } from 'yup';

const clusterCreationSchema = object({
  clusterName: string()
    .matches(/^[a-zA-Z0-9]+$/, 'must not include a special character(s).')
    .required('cluster name is required.'),
  clusterManager: string().required('cluster manager is required.'),
});

export default clusterCreationSchema;
