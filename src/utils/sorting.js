function calcNewOrder(orderKey, newKey) {
  const [oldKey, oldOrder] = orderKey.split(":");

  if (oldOrder === "asc" && oldKey === newKey) {
    return "desc";
  }

  return "asc";
}

function orderBy(orderKey, data) {
  const [key, order] = orderKey.split(":");
  const newOrder = order === "asc" ? 1 : -1;

  return data.sort(function(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const aValue = a[key];
    const bValue = b[key];

    // If is not a valid value
    if (!aValue && !bValue) {
      return 0;
    } else if (!bValue && aValue) {
      return -1;
    } else if (!aValue && bValue) {
      return 1;
    }

    // String comparison
    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.trim().localeCompare(bValue.trim()) * newOrder;
    }

    // Numeric comparison
    return (aValue - bValue) * order;
  });
}

export default {
  orderBy,
  calcNewOrder
};
