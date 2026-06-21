const RestaurantCategory = (props) => {
  //the 'data' field below is from the RestaurantMenu component where we pass the props value.You wont find this 'data' field in our response.
  const menuItems = props.data.itemCards;

  return (
    <>
      <li>{props.data.title}</li>

      <ul>
        {
          menuItems.map((MenuItem) =>{
            return <li key={MenuItem.card.info.id}>{MenuItem.card.info.name}</li>
          })
        }
      </ul>
    </>
  );
};

export default RestaurantCategory;
