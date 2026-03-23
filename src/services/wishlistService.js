import { getData, setData } from "./storage";

export const getWishlist = () => getData("wishlist") || [];

export const toggleWishlist = (userId, productId) => {
  let wishlist = getWishlist();
  
  let userWishlist = wishlist.find((user) => user.userId === userId);


  if(!userWishlist) {
    userWishlist = {
      userId,
      items: [{ productId }]
    };
    wishlist.push(userWishlist);
  } else {
    const exists = userWishlist.items.find(
      (item) => item.productId === productId
    );
    if (exists) {
    userWishlist.items = userWishlist.items.filter(
      (item) => item.productId !== productId
    );
    } else {
      userWishlist.items.push({ productId });
    }
  }

  setData("wishlist", wishlist);
};