import { getData, setData } from "./baseStorage";

export const getCart = () => getData("cart");

export const addToCart = (productId) => {
  let cart = getCart();

  const existing = cart.find((item) => item.productId === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }

  setData("cart", cart);
};

export const updateQuantity = (productId, quantity) => {
  let cart = getCart();

  cart = cart.map((item) =>
    item.productId === productId
      ? { ...item, quantity }
      : item
  );

  setData("cart", cart);
};

export const removeFromCart = (productId) => {
  let cart = getCart().filter(
    (item) => item.productId !== productId
  );

  setData("cart", cart);
};

export const clearCart = () => setData("cart", []);