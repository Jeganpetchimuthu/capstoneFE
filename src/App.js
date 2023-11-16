import React, { useState, useEffect } from "react";

import Navication from "./Components/Navication";
import Home from "./Components/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./Components/Profile";
import Message from "./Components/Message";
import Explore from "./Components/Explore";
import SreachIcon from "./Components/SreachIcon";
import Setting from "./Components/Components_Profile/Setting";
import UserProfie from "./Components/Account_Components/UserProfie";
import PublicProfile from "./Components/Account_Components/PublicProfile";
import Logout from "./Components/Account_Components/Logout";
import AddAccount from "./Components/Account_Components/AddAccount";
import Mail from "./Components/Mail";
import HomeImage from "./HomeImage";

export default function App() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Set a timeout to show the image after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowImage(true);
    }, 5000); // 3000 milliseconds (3 seconds)

    // Cleanup the timeout if the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      {showImage ? (
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<SreachIcon />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/message" element={<Message />} />
            <Route exact path="/mail" element={<Mail />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/setting" element={<Setting />} />
            <Route exact path="/user" element={<UserProfie />} />
            <Route exact path="/public-Profile" element={<PublicProfile />} />
            <Route exact path="/add-accont" element={<AddAccount />} />
            <Route exact path="/logout" element={<Logout />} />
          </Routes>
          <Navication />
        </Router>
      ) : (
        <HomeImage />
      )}
    </div>
  );
}
