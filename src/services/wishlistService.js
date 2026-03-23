import { getData, setData } from "./storage";

export const getWishlist = () => getData("wishlist");

export const toggleWishlist = (productId) => {
  let wishlist = getWishlist();

  if (wishlist.includes(productId)) {
    wishlist = wishlist.filter((id) => id !== productId);
  } else {
    wishlist.push(productId);
  }

  setData("wishlist", wishlist);
};