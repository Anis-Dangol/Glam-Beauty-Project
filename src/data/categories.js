import categoryImage1 from "../assets/home/shopByCategory/img1.png"
import categoryImage2 from "../assets/home/shopByCategory/img2.png"
import categoryImage3 from "../assets/home/shopByCategory/img3.png"
import categoryImage4 from "../assets/home/shopByCategory/img4.png"


const categories = [
  {
    id: 1,
    name: "lips",
    label: "Lips",
    image: categoryImage1,
    route: "lipwear"
  },
  {
    id: 2,
    name: "face",
    label: "Face",
    image: categoryImage2,
    route: "shop"

  },
  {
    id: 3,
    name: "skin care",
    label: "Skin Care",
    image: categoryImage3,
    route: "skincare"
  },
  {
    id: 4,
    name: "fragrance",
    label: "Fragrance",
    image: categoryImage4,
    route: "Fragrance"
  },
];

export default categories;