import { object, string } from 'yup';

const unitCreationSchema = object({
  estate_id: string().required(),
  unit_number: string().required(),
});

export default unitCreationSchema;
