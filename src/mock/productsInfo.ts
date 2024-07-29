import color1 from "../assets/images/color1.jpg";
import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpg";
import pic3 from "../assets/images/pic3.jpg";
import pic4 from "../assets/images/pic4.jpg";

export const getProductInfo = () => {
  return {
    title: "Linen Sheer Grommet Drapery",
    price: 115000,
    gallery: [pic1, pic2, pic3, pic4],
    colors: [
      {
        title: "White",
        img: color1,
      },
      {
        title: "Purple",
        img: color1,
      },
      {
        title: "Navy",
        img: color1,
      },
    ],
    sizes: [
      { id: 1, width: 120, height: 130, isAvailable: false },
      { id: 2, width: 90, height: 120, isAvailable: false },
      { id: 3, width: 150, height: 180, isAvailable: false },
      { id: 4, width: 140, height: 220, isAvailable: true },
    ],
    types: [
      {
        title: "Standard Lining",
      },
      {
        title: "Unlined",
      },
    ],
    quantity: 8,
  };
};
