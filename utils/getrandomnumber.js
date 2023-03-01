export const getRandomNumber = (min, max) => {
  const amplitude = max - min;
  const randomNumber = Math.round(Math.random() * amplitude);

  return min + randomNumber;
};

export default getRandomNumber;
