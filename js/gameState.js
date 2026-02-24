export function createGameState(itemsList) {
  const items = itemsList.map((item) => ({
    id: item.id,
    name: item.name,
    img: item.img,
    found: false,
  }));

  return {
    getItems: () => items.map((item) => ({ ...item })),

    itemFound: (id) => {
      const item = items.find((i) => i.id === id);
      if (item && !item.found) {
        item.found = true;
        return true;
      }
      return false;
    },

    getItemFound: () => items.filter((i) => i.found).length,

    allCheckFound: () => items.every((i) => i.found),
  };
}
