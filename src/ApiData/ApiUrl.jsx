export const storeData = async (apiendpoints) => {
  let res = await fetch("https://fakestoreapi.com/" + apiendpoints);
  let fetchingData = await res.json();
  return fetchingData;
};
