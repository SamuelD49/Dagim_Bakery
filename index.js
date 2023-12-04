const menu = [
  {
    id: 1,
    title: "Double Burger",
    category: "Burger",
    price: 350.0,
    img: "./images/double.jpg",
    desc: `Two beef patties, toasted buns, cheese,beef pepperoni 
          , fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise),`,
  },
  {
    id: 2,
    title: "Special Burger",
    category: "Burger",
    price: 300.0,
    img: "./images/item-2.jpeg",
    desc: `One beef patty, toasted buns, cheese,beef pepperoni 
    , fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise) `,
  },
  {
    id: 3,
    title: "Normal Burger",
    category: "Burger",
    price: 180.0,
    img: "./images/normal.jpg",
    desc: `One beef patty , fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 4,
    title: "Cheese Burger",
    category: "Burger",
    price: 220.0,
    img: "./images/item-8.jpeg",
    desc: `One beef patty , cheese, fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 5,
    title: "Club Sandwich",
    category: "Sandwich",
    price: 250,
    img: "./images/club.jpg",
    desc: `Toasted bread, chicken,fresh vegetables,condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 6,
    title: "Egg Sandwich",
    category: "Sandwich",
    price: 150.0,
    img: "./images/egg.jpeg",
    desc: `Toasted bread,eggs,veggies(optional)`,
  },
  {
    id: 7,
    title: "Tuna Sandwich",
    category: "Sandwich",
    price: 200.0,
    img: "./images/tuna.jpg",
    desc: `Toasted bread,Tuna,veggies,condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 8,
    title: "Avocado Sandwich",
    category: "Sandwich",
    price: 120.0,
    img: "./images/avocado.jpg",
    desc: `Toasted bread,Avocado,veggies`,
  },
  {
    id: 9,
    title: "Special Pizza",
    category: "Pizza",
    price: 450.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a. `,
  },
  {
    id: 10,
    title: "Beef Pizza",
    category: "Pizza",
    price: 300.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 11,
    title: "Tuna Pizza",
    category: "Pizza",
    price: 350.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.  `,
  },
  {
    id: 12,
    title: "Vegetable Pizza",
    category: "Pizza",
    price: 250.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 13,
    title: "Margarita Pizza",
    category: "Pizza",
    price: 280.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 14,
    title: "Chicken Pizza",
    category: "Pizza",
    price: 350.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 15,
    title: "Veggie and Tuna Pizza",
    category: "Pizza",
    price: 330.0,
    img: "./images/pizza.png",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 16,
    title: "Chechebsa",
    category: "Breakfast",
    price: 80.0,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 17,
    title: "Special Chechebsa",
    category: "Breakfast",
    price: 120.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 18,
    title: "Fatira",
    category: "Breakfast",
    price: 100.0,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 19,
    title: "Ful",
    category: "Breakfast",
    price: 80.0,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 20,
    title: "Special Ful",
    category: "Breakfast",
    price: 120.0,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 21,
    title: "Omlet",
    category: "Breakfast",
    price: 90.0,
    img: "./images/omlet.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 22,
    title: "Pasta With Vegetable",
    category: "Breakfast",
    price: 80.0,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 23,
    title: "Tea",
    category: "Drinks",
    price: 15.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },

  {
    id: 24,
    title: "Milk",
    category: "Drinks",
    price: 30.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 25,
    title: "Coffee",
    category: "Drinks",
    price: 25.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 26,
    title: "Macchiato",
    category: "Drinks",
    price: 25.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 27,
    title: "Keshir Tea",
    category: "Drinks",
    price: 25.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 28,
    title: "Soft Drink",
    category: "Drinks",
    price: 30.0,
    img: "./images/soft-drinks.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
  {
    id: 29,
    title: "Juice",
    category: "Drinks",
    price: 80.0,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis
    optio magni blanditiis nisi, dignissimos nam unde enim voluptatibus
    rerum a.`,
  },
];

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayCategoryItems();
});

const sectionElement = document.querySelector(".section-center");
const categoryElement = document.querySelector(".btn-container");

function displayMenuItems(menuList) {
  let sectionContent = "";

  // map ile ?
  menuList.forEach((item) => {
    sectionContent += `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price} ETB</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  sectionElement.innerHTML = sectionContent;
}

function displayCategoryItems() {
  let categories = [];
  let categoryContent = `<button type="button" class="filter-btn" data-id="all">all</button>`;

  menu.forEach((item) => {
    const foodIndex = categories.indexOf(item.category);
    if (foodIndex === -1) {
      categories.push(item.category);
    }
  });

  categories.forEach((category) => {
    categoryContent += `<button type="button" class="filter-btn" data-id="${category}">${category}</button>`;
  });

  categoryElement.innerHTML = categoryContent;

  // =============

  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    // event
    button.addEventListener("click", function (e) {
      // Yemek filtreleme işlemi gerçekleşecek.
      const selectedCategoryName = e.target.getAttribute("data-id");
      const filteredMenu = menu.filter(
        (item) => item.category === selectedCategoryName
      );

      console.log("selectedCategoryName: " + selectedCategoryName);

      if (selectedCategoryName == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenu);
      }
    });
  });
}
