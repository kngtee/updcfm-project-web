import { Base64 } from 'js-base64';

export const stringToBase64 = (payload) => {
  return Base64.encode(payload);
};

export function formatDate(selectedDate) {
  const [year, month, day] = selectedDate.split('-');
  return `${day}/${month}/${year}`;
}
