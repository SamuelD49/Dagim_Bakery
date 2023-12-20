const menu = [
  {
    id: 1,
    title: "Special Pizza / ስፔሻል ፒዛ",
    category: "Pizza",
    price: 450.0,
    img: "./images/special.png",
    desc: `ቲማቲም ሶስ ፣ ቺዝ ፣ የዶሮ ስጋ / ቱና ፣ እንቁላል ፣ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,chesse,beef,eggs,tuna or chicken(optional),tomato,pepper,olive`,
  },
  {
    id: 2,
    title: "Beef Pizza / ቢፍ ፒዛ",
    category: "Pizza",
    price: 300.0,
    img: "./images/beefpizza.jpg",
    desc: `ቲማቲም ሶስ ፣ ቺዝ ፣ የተፈጨ ስጋ ፣ ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,chesse,beef,olive,tomato,pepper   `,
  },
  {
    id: 3,
    title: "Tuna Pizza / ቱና ፒዛ",
    category: "Pizza",
    price: 350.0,
    img: "./images/tunapizza.jpg",
    desc: `ቲማቲም ሶስ ፣ ቺዝ ፣ ቱና ፣ ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,chesse,tuna,tomato,pepper,olive  `,
  },
  {
    id: 4,
    title: "Vegetable Pizza / አትክልት ፒዛ",
    category: "Pizza",
    price: 250.0,
    img: "./images/vegpizza.jpg",
    desc: `ቲማቲም ሶስ  ፣ የተጠብሱ አታክልቶች ፣ ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,different types of veggies,olive  `,
  },
  {
    id: 5,
    title: "Margarita Pizza / ማርገሪታ ፒዛ",
    category: "Pizza",
    price: 280.0,
    img: "./images/marg.png",
    desc: `ቲማቲም ሶስ ፣ ቺዝ ፣ ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,chesse,tomato,pepper,olive `,
  },
  {
    id: 6,
    title: "Chicken Pizza / ቺክን ፒዛ",
    category: "Pizza",
    price: 350.0,
    img: "./images/chickenpizza.jpg",
    desc: `ቲማቲም ሶስ ፣ ቺዝ ፣ የዶሮ ስጋ ፣ ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,chesse,chicken,tomato,pepper,olive  `,
  },
  {
    id: 7,
    title: "Veggie and Tuna Pizza / አትክልትና ቱና ፒዛ",
    category: "Pizza",
    price: 330.0,
    img: "./images/vegtunapizza.jpg",
    desc: `ቲማቲም ሶስ  ፣ የተጠብሱ አታክልቶች ፣ ቱና ፣ ቃርያ ፣ ቲማቲም ፣ ኦሊቭ
    Sauce,tuna,different types of veggies,olive `,
  },
  {
    
    id: 8,
    title: "Double Burger / ደብል በርገር ",
    category: "Burger",
    price: 350.0,
    img: "./images/double.jpg",
    desc: `ሁለት ስጋ ፣ ቺዝ ፣ የጥጃ ስጋ ፣ ሰላጣ ፣ ሽንኩርት ፣ ቲማቲም ፣ ማዮኒዝ ፣
            Two beef patties, cheese,beef pepperoni 
          , fresh lettuce, tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise),`,
  },
  {
    id: 9,
    title: "Special Burger / ስፔሻል በርገር",
    category: "Burger",
    price: 300.0,
    img: "./images/item-2.jpeg",
    desc: `ስጋ ፣ ቺዝ ፣ የጥጃ ስጋ ፣ እንቁላል ፣ ሰላጣ ፣ ሽንኩርት ፣ ቲማቲም ፣ ማዮኒዝ ፣
      One beef patty, cheese, beef pepperoni 
    , fresh lettuce, tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise) `,
  },
  {
    id: 10,
    title: "Normal Burger / ኖርማል በርገር",
    category: "Burger",
    price: 180.0,
    img: "./images/normal.jpg",
    desc: ` ስጋ ፣ ሰላጣ ፣ ሽንኩርት ፣ ቲማቲም ፣ ማዮኒዝ ፣..................................
     One beef patty , fresh lettuce, tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 11,
    title: "Cheese Burger / ቺዝ በርገር",
    category: "Burger",
    price: 220.0,
    img: "./images/item-8.jpeg",
    desc: ` ስጋ ፣ ቺዝ ፣ሰላጣ ፣ ሽንኩርት ፣ ቲማቲም ፣ ማዮኒዝ ፣............................
    One beef patty , cheese, fresh lettuce, tomatoes, sliced onions (raw or grilled), condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 12,
    title: "Club Sandwich / ክለብ ሳንድዊች",
    category: "Sandwich",
    price: 250,
    img: "./images/club.jpg",
    desc: `የዶሮ ስጋ ፣ ማዮኒዝ ፣ ቲማቲም ፣ ሽንኩርት ፣ ቃሪያ ..................
    Toasted bread, chicken,fresh vegetables,condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 13,
    title: "Egg Sandwich / እንቁላል ሳንድዊች",
    category: "Sandwich",
    price: 150.0,
    img: "./images/egg.jpeg",
    desc: ` እንቁላል ሳንድዊች .............................................................
    Toasted bread,eggs,veggies(tomato,bell peppers & other condiments)`,
  },
  {
    id: 14,
    title: "Tuna Sandwich / ቱና ሳንድዊች",
    category: "Sandwich",
    price: 200.0,
    img: "./images/tunasand.jpg",
    desc: `ቱና ፣ ማዮኒዝ ፣ ቲማቲም ፣ ሽንኩርት ፣ ቃሪያ.........................
    Toasted bread,Tuna,veggies,condiments (ketchup, mustard, mayonnaise)`,
  },
  {
    id: 15,
    title: "Avocado Sandwich / አቮካዶ ሳንድዊች",
    category: "Sandwich",
    price: 120.0,
    img: "./images/avocado.jpg",
    desc: ` አቮካዶ ፣ ቲማቲም ፣ ሽንኩርት ፣ ቃሪያ 
    Toasted bread,Avocado,veggies(tomato,bell peppers & other condiments)`,
  },
  {
    id: 16,
    title: "Erteb / እርጥብ",
    category: "Sandwich",
    price: 50.0,
    img: "./images/erteb.jpg",
    desc: ` ኖርማል እርጥብ ..............................................................
    Toasted bread,sauce,potato,condiments(ketchup, mustard)`,
  },
  {
    id: 17,
    title: "Special Erteb / ስፔሻል እርጥብ",
    category: "Sandwich",
    price: 120.0,
    img: "./images/specerteb.jpg",
    desc: ` ድንች ፣ ቃሪያ ፣ እንቁላል ፣ ቺዝ ፣ የጥጃ ስጋ ፣ ኬቻፕ ......................
    Toasted bread,sauce,potato,condiments(ketchup, mustard),egg,cheese,beef`,
  },
  
  {
    id: 18,
    title: "Chechebsa / ጨጨብሳ",
    category: "Breakfast",
    price: 80.0,
    img: "./images/chechebsanorm.jpg",
    desc: `የጨጨብሳ ቂጣ ፣ የአትክልት ቂቤ  ፣ ማር .........................
    Traditional flat bread ,butter,honey       
     `,
  },
  {
    id: 10,
    title: "Special Chechebsa /  ስፔሻል ጨጨብሳ ",
    category: "Breakfast",
    price: 120.0,
    img: "./images/chechebsa.jpg",
    desc: `የጨጨብሳ ቂጣ ፣ የአትክልት ቂቤ ፤ እንቁላል ፣ ማር .........................
    Traditional flat bread ,butter,honey,eggs                   `,
  },
  {
    id: 20,
    title: "Fatira / ፈጢራ",
    category: "Breakfast",
    price: 100.0,
    img: "./images/fetira.png",
    desc: `ቂጣ ፤ እንቁላል ፣ ቲማቲም ፣ ሽንኩርት ፣ ማር .................................
    Flat bread(pita),eggs,tomatoes,onions,honey `,
  },
  {
    id: 21,
    title: "Ful / ፉል",
    category: "Breakfast",
    price: 80.0,
    img: "./images/ful.jpg",
    desc: `የፉል ባቄላ ፣ ቲማቲም ፣ ሽንኩርት ፣ ቃሪያ ....................................
    Ful beans ,tomato,onion,peppers `,
  },
  {
    id: 22,
    title: "Special Ful / ስፔሻል ፉል",
    category: "Breakfast",
    price: 120.0,
    img: "./images/specful.jpg",
    desc: `የፉል ባቄላ ፣ ቲማቲም ፣ ሽንኩርት ፣ ቃሪያ ፣ እንቁላል ፣ እርጎ ................ 
    Ful beans ,tomato,onion,peppers,eggs,youghurt  `,
  },
  {
    id: 23,
    title: "Omlet / ኦምሌት",
    category: "Breakfast",
    price: 100.0,
    img: "./images/omlet.jpeg",
    desc: `እንቁላል ፣ ቲማቲም ፣ ሽንኩርት ፣ ቃሪያ ፣ ቺዝ (እንደፍላጎት)
    Eggs,tomato,cheese(optional) ................................................`,
  },
  {
    id: 24,
    title: "Veggi Pasta / ፓስታ በአትክልት",
    category: "Breakfast",
    price: 80.0,
    img: "./images/pastaveg.jpg",
    desc: ` የተቀቀለ ፓስታ ፤ የተጠበሱ አታክልቶች ...............................
    Spaghetti, stir fried veggies `,
  },
  {
    id: 25,
    title: "Tea / ሻይ",
    category: "Drinks",
    price: 15.0,
    img: "./images/tea2.jpg",
    desc: `ሻይ / Tea  .......................................................................................`,
  },

  {
    id: 26,
    title: "Milk / ወተት",
    category: "Drinks",
    price: 30.0,
    img: "./images/milk.jpg",
    desc: `ትኩስ ወተት / Hot milk   ..................................................................................................`,
  },
  {
    id: 27,
    title: "Coffee / ቡና",
    category: "Drinks",
    price: 25.0,
    img: "./images/coffee.jpg",
    desc: `ቡና / Coffee ............................................................................................`,
  },
  {
    id: 28,
    title: "Macchiato / ማኪያቶ",
    category: "Drinks",
    price: 25.0,
    img: "./images/machiatto.jpg",
    desc: `ማኪያቶ / Machiatto  .......................................................................................................`,
  },
  {
    id: 29,
    title: "Keshir Tea / ቀሽር",
    category: "Drinks",
    price: 25.0,
    img: "./images/keshir.jpg",
    desc: `ቀሽር /Keshir   ............................................................................................`,
  },
  {
    id: 30,
    title: "Soft Drink / ለስላሳ",
    category: "Drinks",
    price: 30.0,
    img: "./images/softdrink.jpg",
    desc: `ለስላሳ / Soft drinks   ...............................................................................................`,
  },
  {
    id: 31,
    title: "Juice / ጁስ",
    category: "Drinks",
    price: 80.0,
    img: "./images/juice.jpg",
    desc: `አቮካዶ ፣ ፓፓያ እና ሌሎች ጭማቂዎች ...............................
    Avocado,Papaya, Different Smoothies                                             
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
            <h4 class="price">   ${item.price} ETB</h4>
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
