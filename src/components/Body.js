import RestaurantCard from "./RestaurantCard";
//8 Items
const restaurantList = [
  {
    type: "restaurant",
    data: {
      id: 0,
      name: "KFC",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.3,
      costForTwo: 40000,
      deliveryTime: 38,
      imageLink:
        "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 1,
      name: "Domino's Pizza",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.2,
      costForTwo: 50000,
      deliveryTime: 30,
      imageLink: "https://clipart-library.com/2024/food-images/food-images-3.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 2,
      name: "A2B - Adyar Ananda Bhavan",
      cuisines: ["South Indian", "Sweets", "Snacks"],
      avgRating: 4.4,
      costForTwo: 30000,
      deliveryTime: 25,
      imageLink: "https://img.freepik.com/premium-photo/food-photos_639785-169936.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 3,
      name: "Burger King",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 4.1,
      costForTwo: 45000,
      deliveryTime: 28,
      imageLink: "https://static.vecteezy.com/system/resources/previews/020/824/046/large_2x/assortment-of-healthy-protein-source-and-body-building-food-free-photo.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 4,
      name: "Saravana Bhavan",
      cuisines: ["South Indian", "Vegetarian"],
      avgRating: 4.5,
      costForTwo: 35000,
      deliveryTime: 32,
      imageLink: "https://thumbs.dreamstime.com/b/fresh-breakfast-eggs-food-photos-285707612.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 5,
      name: "Subway",
      cuisines: ["Healthy Food", "Salads", "Sandwiches"],
      avgRating: 4.0,
      costForTwo: 40000,
      deliveryTime: 27,
      imageLink: "https://img.freepik.com/premium-photo/food-photos_639785-169426.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 6,
      name: "Pizza Hut",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.2,
      costForTwo: 55000,
      deliveryTime: 35,
      imageLink: "https://www.pngmart.com/files/23/Food-PNG-Isolated-Pic.png",
    },
  },
  {
    type: "restaurant",
    data: {
      id: 7,
      name: "Barbeque Nation",
      cuisines: ["BBQ", "North Indian", "Grill"],
      avgRating: 4.3,
      costForTwo: 80000,
      deliveryTime: 40,
      imageLink: "https://sukhis.com/app/uploads/2022/11/delicious-indian-veg-food.jpg",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          restaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
          ))
        }      
      </div>
    </div>
  );
};

export default Body;