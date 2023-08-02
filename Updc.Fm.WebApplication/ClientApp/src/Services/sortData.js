export const ArrangeData = (data, sortKey) => {
  return data.sort((itemA, itemB) => {
    const nameA = itemA[sortKey].toUpperCase(); // ignore upper and lowercase
    const nameB = itemB[sortKey].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
