import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = ({ userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/6550c3ff53465b9fb0d50a6b`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, [userId]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Profile Image: {userData.profileImage}</p>
      <img src={`http://localhost:5000/${userData.profileImage}`} />
    </div>
  );
};

export default Home;
