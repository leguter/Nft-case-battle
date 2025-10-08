// interface Item {
//   id: number;
//   name: string;
//   rarity: string;
//   color: string;
//   image: string;
//   weight: number;
// }

export const getWeightedRandomItem = (items: Item): Item => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of items) {
    if (random < item.weight) {
      return item;
    }
    random -= item.weight;
  }

  // Fallback, should not be reached if weights are positive
  return items[items.length - 1];
};