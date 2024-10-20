import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";
import "@dotlottie/player-component";
// Import your CSS file

function Homepage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/form"); // Change '/form' to the desired path
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Navigate to the login page after logging out
      console.log("User logged out");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="welcomeMessage">
          Welcome! <br />
          Quickly find out your body weight, height, and body fat <br />
          percentage. Easy metrics, healthier you!
        </h2>

        <button onClick={handleNavigate} className="getStartedbtn">
          Get started!
        </button>
        <button onClick={handleLogout} className="logoutBtn">
          Logout
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <dotlottie-player
          className="Imo"
          src="https://lottie.host/ad2bca8d-7994-4b59-ba5e-768e4ddee51b/MGSYf25Ffs.json"
          background="transparent"
          speed="0.75"
          style={{ width: "600px", height: "600px" }}
          loop
          autoplay
        />
      </div>
    </>
  );
}

export default Homepage;
