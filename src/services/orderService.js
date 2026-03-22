import { getData, setData } from "./baseStorage";

export const createOrder = (userId, cart, products) => {
  const orders = getData("orders");

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + product.price * item.quantity;
  }, 0);

  const newOrder = {
    id: Date.now(),
    userId,
    items: cart,
    totalAmount: total,
    status: "pending",
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  setData("orders", orders);

  return newOrder;
};

export const getUserOrders = (userId) => {
  const orders = getData("orders");
  return orders.filter(o => o.userId === userId);
};