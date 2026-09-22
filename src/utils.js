export function filterByCategory(items, category) {
  return category === "All categories"
    ? items
    : items.filter((item) => item.tags.includes(category));
}
export function monthlyPrice(basePrice, annual = false) {
  return Math.round(basePrice * (annual ? 0.76 : 1));
}
