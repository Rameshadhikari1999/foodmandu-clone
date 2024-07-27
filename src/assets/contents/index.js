import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";
import img5 from "../images/img-5.jpg";
import img6 from "../images/img-6.jpg";
import img7 from "../images/img-7.jpg";
import img8 from "../images/img-8.jpg";

const featureMenu = [
  {
    id: 1,
    img: img1,
    title: "4 Corners - Detroit Style Pizza",
  },
  {
    id: 2,
    img: img2,
    title: "Koto Restaurant - Durbarmarg",
  },
  {
    id: 3,
    img: img3,
    title: "Kathmandu Marriott",
  },
  {
    id: 4,
    img: img4,
    title: "Burger Shack - Kamaladi",
  },
  {
    id: 5,
    img: img5,
    title: "Fire And Ice Pizzeria - Thamel",
  },
  {
    id: 6,
    img: img6,
    title: "The Workshop Eatery - Bakhundole",
  },
  {
    id: 7,
    img: img7,
    title: "Le Trio - Jhamsikhel",
  },
  {
    id: 8,
    img: img8,
    title: "Burger Shack - Jawalakhel",
  },
];

const MenuList = [
  {
    id: 1,
    title: "Shrawan Offer",
    subTitle: "Offer valid from 26th july - 1st Aug",
    menuItem: [
      {
        id: 1,
        name: "Shrawan Offer (Set 1)",
        desc: "Farmhouse (8inch), Fries, 1 Coke 250ml",
        price: 899.0,
      },
      {
        id: 2,
        name: "Shrawan Offer (Set 2)",
        desc: "Honey Spinach Bianca (8inch), Fries, 1 Coke 250ml",
        price: 999.0,
      },
      {
        id: 3,
        name: "Shrawan Offer (Set 3)",
        desc: "Paneer Tikka (8inch), Fries, 1 Coke 250ml",
        price: 999.0,
      },
    ],
  },
  {
    id: 2,
    title: "Signature Pizza",
    menuItem: [
      {
        id: 1,
        name: "The Hulk Pizza",
        desc: "mozzarella, pizza sauce, chicken, caramelized onions, jalapenos, ricotta and a homemade pineapple chilli sauce, pineapple",
        price: 1325.0,
      },
      {
        id: 2,
        name: "Tony Montana Pizza",
        desc: "Tomato sauce, Riccota cheese, mozzarella, jalapenos, bacon caramelized onions and homemade italian sausage",
        price: 1325.0,
      },
      {
        id: 3,
        name: "Elvira Pizza",
        desc: "Hot honey, garlic, spinach, Italian sausage, mozzarella, and ricotta",
        price: 1325.0,
      },
      {
        id: 4,
        name: "Supreme Pizza",
        desc: "Mozzarella, pizza sauce, onion, green pepper, mushroom, black olives, pepperoni, Italian sausage.",
        price: 1325.0,
      },
    ],
  },
  {
    id: 3,
    title: "Pizza (10 inch)",
    subTitle: "All Pizzas Are Inclusive Of Rs 25 Box Charges",
    menuItem: [
      {
        id: 1,
        name: "Cheesy Garlic Bread",
        desc: "Lots of garlic and lots of cheese served on your signature bread and mariana sauce",
        price: 625.0,
      },
      {
        id: 2,
        name: "Margherita",
        desc: "Tomato sauce, Riccota cheese, mozzarella, jalapenos, bacon caramelized onions and homemade italian sausage",
        price: 725.0,
      },
      {
        id: 3,
        name: "Farmhouse",
        desc: "Mozzarella, Pizza sauce, capsicum, mushroom, onion",
        price: 825.0,
      },
      {
        id: 4,
        name: "Funghi",
        desc: "Mozzarella, Pizza sauce, three types of mushroom & ricotta.",
        price: 825.0,
      },
      {
        id: 5,
        name: "Spicy Funghi Pizza",
        desc: "Mozzarella, Pizza Sauce, onions, mushroom in Local Flavors.",
        price: 825.0,
      },
      {
        id: 6,
        name: "Spicy Paneer Pizza",
        desc: "mozzarella, pizza sauce, onion, and spicy paneer",
        price: 925.0,
      },
    ],
  },
  {
    id: 4,
    title: "Pizza (8 inch)",
    subTitle: "All Pizzas Are Inclusive Of Rs 25 Box Charges",
    menuItem: [
      {
        id: 1,
        name: "Cheesy Garlic Bread Pizza",
        desc: "Lots of Garlic and lots of cheese served on our signature bread and marinara sauce",
        price: 425.0,
      },
      {
        id: 2,
        name: "Margherita Pizza",
        desc: "mozzarella & pizza saucee",
        price: 525.0,
      },
      {
        id: 3,
        name: "Margherita Pizza",
        desc: "mozzarella, pizza sauce, capsicum, mushroom, onion",
        price: 625.0,
      },
      {
        id: 4,
        name: "Funghi Pizza",
        desc: "mozzarella, pizza sauce, three types of mushroom & ricotta",
        price: 725.0,
      },
    ],
  },
  {
    id: 5,
    title: "Toppings",
    menuItem: [
      { id: 1, name: "Garlic", price: 100.0 },
      { id: 2, name: "Capsicum", price: 100.0 },
      { id: 3, name: "Mushroom", price: 100.0 },
      { id: 4, name: "Onion", price: 100.0 },
      { id: 5, name: "Caramelized Onion", price: 150.0 },
      { id: 6, name: "Jalapenos", price: 150.0 },
      { id: 7, name: "Pineapple", price: 150.0 },
      { id: 8, name: "Paneer", price: 200.0 },
      { id: 9, name: "Ricotta Cheese", price: 200.0 },
      { id: 10, name: "Extra Cheese", price: 200.0 },
      { id: 11, name: "Chicken", price: 200.0 },
      { id: 12, name: "Bacon", price: 200.0 },
      { id: 13, name: "Ham", price: 200.0 },
      { id: 14, name: "Salami", price: 200.0 },
      { id: 15, name: "Sausage", price: 300.0 },
      { id: 16, name: "Pepperoni", price: 400.0 },
      { id: 17, name: "Black Olive", price: 150.0 },
      { id: 18, name: "Parmesan", price: 400.0 },
      { id: 19, name: "Sundried Tomato", price: 200.0 },
    ]},
  {
    id: 6,
    title: "Wings & Tenders",
    menuItems: [
      { id: 1, name: "Cheesy Garlic Bread Pizza", price: 425.0 },
      { id: 2, name: "Garlic", price: 100.0 },
      { id: 3, name: "Capsicum", price: 100.0 },
      { id: 4, name: "Mushroom", price: 100.0 },
      { id: 5, name: "Onion", price: 100.0 },
      { id: 6, name: "Caramelized Onion", price: 150.0 },
      { id: 7, name: "Jalapenos", price: 150.0 },
      { id: 8, name: "Pineapple", price: 150.0 },
      { id: 9, name: "Paneer", price: 200.0 },
      { id: 10, name: "Ricotta Cheese", price: 200.0 },
      { id: 11, name: "Extra Cheese", price: 200.0 },
      { id: 12, name: "Chicken", price: 200.0 },
      { id: 13, name: "Bacon", price: 200.0 },
      { id: 14, name: "Ham", price: 200.0 },
      { id: 15, name: "Salami", price: 200.0 },
      { id: 16, name: "Sausage", price: 300.0 },
      { id: 17, name: "Pepperoni", price: 400.0 },
      { id: 18, name: "Black Olive", price: 150.0 },
      { id: 19, name: "Parmesan", price: 400.0 },
      { id: 20, name: "Sundried Tomato", price: 200.0 },
      { id: 21, name: "Wings (Mild)", price: 550.0 },
      { id: 22, name: "Wings (BBQ)", price: 550.0 },
      { id: 23, name: "Wings (Peri Peri)", price: 550.0 },
      { id: 24, name: "Wings (Insanity)", price: 550.0 },
      { id: 25, name: "Tender (Mild)", price: 550.0 },
      { id: 26, name: "Tender (BBQ)", price: 550.0 },
      { id: 27, name: "Tender (Peri Peri)", price: 550.0 },
      { id: 28, name: "Tender (Insanity)", price: 550.0 },
    ]},
  {
    id: 7,
    title: "Burgers",
    menuItems: [
      {
        id: 1,
        name: "Classic Fried Chicken Burger",
        desc: "iceberg, garlic mayo, tomato, onion, cheese",
        price: 550.0,
      },
      {
        id: 2,
        name: "Grilled Chicken Burger",
        desc: "iceberg, garlic mayo, tomato, onion, cheese",
        price: 550.0,
      },
      {
        id: 3,
        name: "Tennessee Hot Burger",
        desc: "spicy sauce, pickles, mayo",
        price: 550.0,
      },
      {
        id: 4,
        name: "Chicken Bacon Ranch Burger",
        desc: "iceberg, tomato, onion, bacon, ranch, mayo, mild hot sauce",
        price: 550.0,
      },
      {
        id: 5,
        name: "Peri Peri Burger",
        desc: "peri peri sauce, iceberg, tomato, onion, mayo",
        price: 550.0,
      }]}];

export { featureMenu, MenuList };
