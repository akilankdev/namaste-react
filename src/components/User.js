import { useEffect, useState } from "react";
const User = ({ name, location }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/akilankdev");
    const json = await data.json();
    setUserData(json);
  };

  return (
    <div className="user-card">
      <img src={userData.avatar_url} alt="user's avatar" className="w-40 m-4 rounded-sm"></img>
      <div className="m-4 p-3">
        <h2>GitHub UserName: {userData.login}</h2>
        <h2>Name: {userData.name}</h2>
        <h3>Location: {userData.location}</h3>
        <h3>Contact: some email </h3>
      </div>
    </div>
  );
};

export default User;
