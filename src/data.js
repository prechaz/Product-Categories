const data = {
  categories: [
    {
      id: 1,
      name: "Electronics",
      subcategories: ["gadgets", "gaming", "smartphones"],
    },
    {
      id: 2,
      name: "Fashion",
      subcategories: ["clothing", "women's Wear", "accessories"],
    },
    {
      id: 3,
      name: "Home",
      subcategories: ["furniture", "kitchen", "decor"],
    },
    {
      id: 4,
      name: "Beauty",
      subcategories: ["skincare", "haircare", "makeup"],
    },
  ],
  products: [
    {
      id: 1,
      categories: ["electronics", "gadgets"],
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAACUCAMAAAAeaLPCAAAAZlBMVEX///8AAABBQUF8fHyTk5OPj4+dnZ3W1tbu7u6qqqqnp6fq6ur8/PwGBgajo6OwsLDf3990dHQUFBQiIiIcHBwyMjK4uLjCwsLQ0NAsLCw7OzvJyclgYGD09PRPT09vb29ISEiHh4fOSJUyAAAC6klEQVR4nO3c63KiQBCG4TQgx0FGkIMIGu//JpcQs9Ed3Cpoii+z28+PJJXSylvjSPDUb29CCCHE+hQ64EGvz3WWVdmD6Mn+QxxFsR9ldaNDdPDdsIZJ5jo0R3uNkp+x+urc5bPSR5fsJ7T3cTks5S0Ik1EYfvwQfnx/JQm84Srk4+tVfCIn+rOj18GXJmgabXRmBdF+o8TX9IXe9fBdPfapQ5HfpemwyMXO2OB1S6Q37Jy0p/xs/LIytnhgXCbLydsi8G862pl792bEV8Zl+itdwLteU2EuvLny6cQOidLSvD021dDF7FLq4LTOt9bxn+8To3NxNG+PTVV0mLjtVR88e5uI71uKt0h8LSJ38XUd9KHeZ8V72PgdK37iQLUhdWXFu9h4z+ZtY/Wel3gUiUex+mgj8RjK6j2veSuPPauseSdm/oop80k8Ss3c8yumzJfYvPLM83mJX8zq+N7meO5/2BVT5pN4FIlHYcZjX5Xixee3ZMWW2XjxRxf60kjAOjE7HqDxoc0rz3sALvHLMe+w2D1vd7zNRxuJR7F7z0s8CPfcplmxZTZefO5C36ileE/3YV9cYMaDnzGzOZ75gprEL2f1tpF4FIlHkXgUiUeReBSJR5F4FKvjrX4wIvEoEo8i8SgSjyLxKBKPIvEo/3E8eOaExKOw4lPw6ACJR5F4FIlHYT3dJ/EMEo8i8SgSj2J1/I0VH61YsgArHjzHTHU5a5rWiinzKTe19zEs5x2tCr7nGafEfZtm2CGze7ou/fv6dKyw8RV1Sz8WWh/LBhsfkLP0oxM+tSE2Xr0vPWSEHd0mplhuyv8cjjvfnqhGD4XWFzosmaxdlVT2q9fMpKoy7fTswdpeMTUxd3MqLvP8ek7CfjB+6ceh1f3jAOvPQdfJXe2eiNBDzD6p6jIOEj+V5akYHL8nQf/4QeJDfeB3p1kj0Msuho+y/k0lQeXvbu5u5PneF3+0fxLVZw2ddzAJfNAWQgjxr/kFRdAoIh9j9g8AAAAASUVORK5CYII=",
      product: "Apple Watch",
      description:
        "Stay connected with the Apple Watch, featuring a large display and all-day battery life.",
    },
    {
      id: 2,
      categories: ["fashion", "accessories"],
      image: "https://images.unsplash.com/photo-1588945454014-0347b5750e34",
      product: "Leather Wallet",
      description:
        "A stylish and durable leather wallet for men, perfect for everyday use.",
    },
    {
      id: 3,
      categories: ["home", "kitchen"],
      image: "https://images.unsplash.com/photo-1577976474564-743a1777f2e1",
      product: "Nespresso Coffee Machine",
      description:
        "Experience the perfect cup of coffee with the Nespresso Coffee Machine, featuring a sleekdesign and advanced features.",
    },
    {
      id: 4,
      categories: ["beauty", "skincare"],
      image: "https://images.unsplash.com/photo-1591051174171-611e3b2cfa29",
      product: "Moisturizing Cream",
      description:
        "Hydrate and nourish your skin with our Moisturizing Cream, rich in antioxidants and vitamins.",
    },
    {
      id: 5,
      categories: ["electronics", "gaming"],
      image: "https://images.unsplash.com/photo-1588945491243-4b13b591a91f",
      product: "PlayStation 5",
      description:
        "Experience the next generation of gaming with the PlayStation 5, featuring a powerful processor and stunning graphics.",
    },
    {
      id: 6,
      categories: ["fashion", "clothing"],
      image: "https://images.unsplash.com/photo-1588945512083-02255103971b",
      product: "Denim Jeans",
      description:
        "Stay stylish and comfortable with our Denim Jeans, featuring a classic design and durable material.",
    },
    {
      id: 7,
      categories: ["home", "decor"],
      image: "https://images.unsplash.com/photo-1577976494346-6f1a1a2113e1",
      product: "Artistic Painting",
      description:
        "Add a touch of elegance to your home with our Artistic Painting, featuring a unique design and vibrant colors.",
    },
    {
      id: 8,
      categories: ["beauty", "haircare"],
      image: "https://images.unsplash.com/photo-1591051223519-6c5a3a3d8b4f",
      product: "Shampoo",
      description:
        "Keep your hair clean and healthy with our Shampoo, featuring a gentle formula and refreshing scent.",
    },
    {
      id: 9,
      categories: ["electronics", "smartphones"],
      image: "https://images.unsplash.com/photo-1588945522527-8f9a3a4a4a4f",
      product: "iPhone 13",
      description:
        "Stay connected with the iPhone 13, featuring a powerful processor and advanced camera system.",
    },
    {
      id: 10,
      categories: ["fashion", "accessories"],
      image: "https://images.unsplash.com/photo-1588945531117-9a4a3a5a5a5b",
      product: "Leather Belt",
      description:
        "Add a touch of style to your outfit with our Leather Belt, featuring a classic design and durable material.",
    },
    {
      id: 11,
      categories: ["home", "kitchen"],
      image: "https://images.unsplash.com/photo-1577976514153-7f1a1a1a1a1a",
      product: "Stand Mixer",
      description:
        "Bake like a pro with our Stand Mixer, featuring a powerful motor and versatile attachments.",
    },
    {
      id: 12,
      categories: ["beauty", "makeup"],
      image: "https://m.media-amazon.com/images/I/51RX7A6I5JL._SL1500_.jpg",
      product: "Lipstick",
      description:
        "Add a pop of color to your look with our Lipstick, featuring a wide range of shades and a moisturizing formula.",
    },
    {
      id: 13,
      categories: ["electronics", "gaming"],
      image: "https://m.media-amazon.com/images/I/61H5+bvI+gL._SL1500_.jpg",
      product: "Xbox Series X",
      description:
        "Experience the next generation of gaming with the Xbox Series X, featuring a powerful processor and stunning graphics.",
    },
    {
      id: 14,
      categories: ["fashion", "clothing"],
      image: "https://m.media-amazon.com/images/I/71vQm6W7WgL._SL1500_.jpg",
      product: "T-Shirt",
      description:
        "Stay stylish and comfortable with our T-Shirt, featuring a classic design and soft material.",
    },
    {
      id: 15,
      categories: ["home", "decor"],
      image: "https://m.media-amazon.com/images/I/81v1Wp+u8gL._SL1500_.jpg",
      product: "Vase",
      description:
        "Add a touch of elegance to your home with our Vase, featuring a unique design and beautiful colors.",
    },
    {
      id: 16,
      categories: ["beauty", "skincare"],
      image: "https://m.media-amazon.com/images/I/71YqWm9ZIgL._SL1500_.jpg",
      product: "Face Cream",
      description:
        "Hydrate and nourish your skin with our Face Cream, featuring a rich formula and gentle ingredients.",
    },
    {
      id: 17,
      categories: ["electronics", "smartphones"],
      image: "https://m.media-amazon.com/images/I/71i+VXyY8gL._SL1500_.jpg",
      product: "Samsung Galaxy S22",
      description:
        "Stay connected with the Samsung Galaxy S22, featuring a powerful processor and advanced camera system.",
    },
    {
      id: 18,
      categories: ["fashion", "accessories"],
      image: "https://m.media-amazon.com/images/I/71vQm6W7WgL._SL1500_.jpg",
      product: "Sunglasses",
      description:
        "Add a touch of style to your outfit with our Sunglasses, featuring a classic design and durable material.",
    },
    {
      id: 19,
      categories: ["home", "kitchen"],
      image: "https://m.media-amazon.com/images/I/81v1Wp+u8gL._SL1500_.jpg",
      product: "Coffee Maker",
      description:
        "Start your day off right with our Coffee Maker, featuring a sleek design and advanced features.",
    },
    {
      id: 20,
      categories: ["beauty", "haircare"],
      image: "https://m.media-amazon.com/images/I/71YqWm9ZIgL._SL1500_.jpg",
      product: "Conditioner",
      description:
        "Keep your hair healthy and strong with our Conditioner, featuring a nourishing formula and refreshing scent.",
    },
  ],
};
export default data