export const loadgifs = async (param) => {
  const response = await fetch(
    `https://shouldyoudoit.herokuapp.com/?search=${param}`
  );
  const json = response.json();
  return json;
};
