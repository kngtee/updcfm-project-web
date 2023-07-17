import { Base64 } from 'js-base64';

export const stringToBase64 = (payload) => {
  return Base64.encode(payload);
};

// export function formatDate(selectedDate) {
//   const formattedDate = new Date(selectedDate).toLocaleDateString(undefined);

//   const [month, day, year] = formattedDate.split(' ');

//   const capitalizedMonth = month.toUpperCase();

//   return `${day} ${capitalizedMonth} ${year}`;
// }

export function formatDate(selectedDate) {
  const date = new Date(selectedDate);
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${month.toUpperCase()} ${year}`;
}
