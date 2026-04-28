const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, imageLink, deliveryTime } = resData?.data; //Optional Chaining.But its unnecessary now because all of api data is complete.
  return (
    <div className="res-card">
      <img className="res-logo" src={imageLink} alt={name}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>Cost for Two: {costForTwo / 100} Rupees</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;