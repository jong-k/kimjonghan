export const pickRandomIndex = (length: number) => {
  // eslint-disable-next-line sonarjs/pseudo-random
  return Math.floor(Math.random() * length);
};

export const pickRandomItem = <T>(items: Array<T>) => {
  if (items.length === 0) return;
  const randomIndex = pickRandomIndex(items.length);
  return items[randomIndex];
};
