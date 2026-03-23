import { getData, setData } from "./storage";


export const getCartByUser = (userId) => {
  const cart = getData("cart");
  return cart.find(c => c.userId === userId) || { userId, items: [] };
};

export const addToCart = (userId, productId, qty = 1) => {
  let cart = getData("cart");

  let userCart = cart.find(c => c.userId === userId);

  if (!userCart) {
    userCart = { userId, items: [] };
    cart.push(userCart);
  }
  

  const existing = userCart.items.find(i => i.productId === productId);

  if (existing) {
    existing.quantity += qty;
  } else {
    userCart.items.push({ productId, quantity: qty });
  }

  setData("cart", cart);
};

export const removeFromCart = (userId, productId) => {
  let cart = getData("cart");

  cart = cart.map(c =>
    c.userId === userId
      ? {
          ...c,
          items: c.items.filter(i => i.productId !== productId)
        }
      : c
  );

  setData("cart", cart);
};

export const clearCart = (userId) => {
  let cart = getData("cart");

  cart = cart.map(c =>
    c.userId === userId ? { ...c, items: [] } : c
  );

  setData("cart", cart);
};