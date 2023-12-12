const menu = [
  {
    id: 1,
    title: "Special Pizza",
    category: "Pizza",
    price: 450.0,
    img: "./images/special.png",
    desc: `Sauce,chesse,beef,eggs,tuna or chicken(optional),tomato,pepper,olive`,
  },
  {
    id: 2,
    title: "Beef Pizza",
    category: "Pizza",
    price: 300.0,
    img: "./images/beefpizza.jpg",
    desc: `Sauce,chesse,beef,olive,tomato,pepper   ............................................................`,
  },
  {
    id: 3,
    title: "Tuna Pizza",
    category: "Pizza",
    price: 350.0,
    img: "./images/tunapizza.jpg",
    desc: `Sauce,chesse,tuna,tomato,pepper,olive  .........................................................`,
  },
  {
    id: 4,
    title: "Vegetable Pizza",
    category: "Pizza",
    price: 250.0,
    img: "./images/vegpizza.jpg",
    desc: `Sauce,different types of veggies,olive  .........................................................`,
  },
  {
    id: 5,
    title: "Margarita Pizza",
    category: "Pizza",
    price: 280.0,
    img: "./images/marg.png",
    desc: `Sauce,chesse,tomato,pepper,olive  .........................................................`,
  },
  {
    id: 6,
    title: "Chicken Pizza",
    category: "Pizza",
    price: 350.0,
    img: "./images/chickenpizza.jpg",
    desc: `Sauce,chesse,chicken,tomato,pepper,olive  .........................................................`,
  },
  {
    id: 7,
    title: "Veggie and Tuna Pizza",
    category: "Pizza",
    price: 330.0,
    img: "./images/vegtunapizza.jpg",
    desc: `Sauce,tuna,different types of veggies,olive  .........................................................`,
  },
  {
    
    id: 8,
    title: "Double Burger",
    category: "Burger",
    price: 350.0,
    img: "./images/double.jpg",
    desc: `Two beef patties, toasted buns, cheese,beef pepperoni 
          , fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise),`,
  },
  {
    id: 9,
    title: "Special Burger",
    category: "Burger",
    price: 300.0,
    img: "./images/item-2.jpeg",
    desc: `One beef patty, toasted buns, cheese,beef pepperoni 
    , fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise) `,
  },
  {
    id: 10,
    title: "Normal Burger",
    category: "Burger",
    price: 180.0,
    img: "./images/normal.jpg",
    desc: `One beef patty , fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 11,
    title: "Cheese Burger",
    category: "Burger",
    price: 220.0,
    img: "./images/item-8.jpeg",
    desc: `One beef patty , cheese, fresh lettuce, ripe tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 12,
    title: "Club Sandwich",
    category: "Sandwich",
    price: 250,
    img: "./images/club.jpg",
    desc: `Toasted bread, chicken,fresh vegetables,condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 13,
    title: "Egg Sandwich",
    category: "Sandwich",
    price: 150.0,
    img: "./images/egg.jpeg",
    desc: `Toasted bread,eggs,veggies(tomato,bell peppers & other condiments)`,
  },
  {
    id: 14,
    title: "Tuna Sandwich",
    category: "Sandwich",
    price: 200.0,
    img: "./images/tunasand.jpg",
    desc: `Toasted bread,Tuna,veggies,condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 15,
    title: "Avocado Sandwich",
    category: "Sandwich",
    price: 120.0,
    img: "./images/avocado.jpg",
    desc: `Toasted bread,Avocado,veggies(tomato,bell peppers & other condiments)`,
  },
  {
    id: 16,
    title: "Erteb",
    category: "Sandwich",
    price: 50.0,
    img: "./images/erteb.jpg",
    desc: `Toasted bread,sauce,potato,condiments(ketchup, mustard)`,
  },
  {
    id: 17,
    title: "Special Erteb",
    category: "Sandwich",
    price: 120.0,
    img: "./images/specerteb.jpg",
    desc: `Toasted bread,sauce,potato,condiments(ketchup, mustard),egg,cheese,beef`,
  },
  
  {
    id: 18,
    title: "Chechebsa",
    category: "Breakfast",
    price: 80.0,
    img: "./images/chechebsanorm.jpg",
    desc: `Traditional flat bread ,butter,honey       
     ..................................`,
  },
  {
    id: 10,
    title: "Special Chechebsa",
    category: "Breakfast",
    price: 120.0,
    img: "./images/chechebsa.jpg",
    desc: `Traditional flat bread ,butter,honey,eggs ..........................                  `,
  },
  {
    id: 20,
    title: "Fatira",
    category: "Breakfast",
    price: 100.0,
    img: "./images/fetira.png",
    desc: `Flat bread(pita),eggs,tomatoes,onions ..........................................`,
  },
  {
    id: 21,
    title: "Ful",
    category: "Breakfast",
    price: 80.0,
    img: "./images/ful.jpg",
    desc: `full beans ,tomato,onion,peppers  ..............................................`,
  },
  {
    id: 22,
    title: "Special Ful",
    category: "Breakfast",
    price: 120.0,
    img: "./images/specful.jpg",
    desc: `Ful beans ,tomato,onion,peppers,eggs,youghurt  .....................................`,
  },
  {
    id: 23,
    title: "Omlet",
    category: "Breakfast",
    price: 100.0,
    img: "./images/omlet.jpeg",
    desc: `Eggs,tomato,cheese(optional) ................................................`,
  },
  {
    id: 24,
    title: "Pasta With Vegetable",
    category: "Breakfast",
    price: 80.0,
    img: "./images/pastaveg.jpg",
    desc: `Spaghetti, stir fried veggies .................................................................`,
  },
  {
    id: 25,
    title: "Tea",
    category: "Drinks",
    price: 15.0,
    img: "./images/tea2.jpg",
    desc: `Tea  .................................................................................................`,
  },

  {
    id: 26,
    title: "Milk",
    category: "Drinks",
    price: 30.0,
    img: "./images/milk.jpg",
    desc: `Hot milk   ..................................................................................................`,
  },
  {
    id: 27,
    title: "Coffee",
    category: "Drinks",
    price: 25.0,
    img: "./images/coffee.jpg",
    desc: `Coffee .....................................................................................................`,
  },
  {
    id: 28,
    title: "Macchiato",
    category: "Drinks",
    price: 25.0,
    img: "./images/machiatto.jpg",
    desc: `Machiatto  .......................................................................................................`,
  },
  {
    id: 29,
    title: "Keshir Tea",
    category: "Drinks",
    price: 25.0,
    img: "./images/keshir.jpg",
    desc: `Keshir   ......................................................................................................`,
  },
  {
    id: 30,
    title: "Soft Drink",
    category: "Drinks",
    price: 30.0,
    img: "./images/softdrink.jpg",
    desc: `Soft drinks   ......................................................................................................`,
  },
  {
    id: 31,
    title: "Juice",
    category: "Drinks",
    price: 80.0,
    img: "./images/juice.jpg",
    desc: `Avocado,Papaya, Different Smoothies     .......................................................................................................                                         
         `,
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
