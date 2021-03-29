import React from "react";
import "./App.css";
import MyProfile from "./Components/Profile/Profile";
import ProfileImg from "./Assets/profileImg.jpg";

function App() {
  const handleName = (e, name) => {
    e.preventDefault();
    alert(`Current user : ${name}`);
  };
  return (
    <>
      <MyProfile
        fullName="Nourchen Noamen"
        bio="Graduated from ESSTHS - Sousse"
        profession="Student"
        handleName={handleName}
      >
        {ProfileImg}
      </MyProfile>
    </>
  );
}
export default App;
