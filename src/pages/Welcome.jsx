import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import pic from "../welcome.jpg";
import "./Welcome.css";
import WNavbar from '../components/WelcomeNavbar.jsx';

const Welcome = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(true);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  const handleClose = () => {
    setShowWelcome(false);
  };

  return (
    <div className="container-main">
      <WNavbar />
      <div className="welcome-page">
        <div className="content-wrapper">
          <img src={pic} alt="Welcome" className="sliding-image" />
          <div className={`welcome-content ${showWelcome ? "show" : ""}`}>
            <button onClick={handleClose} className="close-btn">
              &times;
            </button>
            <h1>Welcome to The Cocktail Store</h1>
            <p>Please log in to view the cocktails.</p>
            <button onClick={() => loginWithRedirect()} className="btn">
              Log In
            </button>
          </div>
          <div className="static-text-area">
            <h2>About The Cocktail Store</h2>
            <p>
              The Cocktail Store is a comprehensive database of cocktail recipes, providing users with a wide range of drink options to explore and enjoy. With a vast collection of classic and contemporary cocktails, the app offers detailed information on each drink, including the name, ingredients, glass type, and step-by-step instructions.
            </p>
            <p>
              Whether you're a seasoned mixologist or a cocktail enthusiast, The Cocktail Store is your go-to resource for discovering new and exciting drink recipes. The app features a user-friendly interface that allows you to search for cocktails by name, ingredient, or glass type, making it easy to find the perfect drink for any occasion.
            </p>
            <p>
              With The Cocktail Store, you can learn about the history and origins of your favorite cocktails, as well as discover unique and creative twists on classic recipes. The app also provides suggestions for garnishes and glassware, ensuring that your cocktail experience is not only delicious but visually appealing as well.
            </p>
            <p>
              So why wait? Log in to The Cocktail Store and start exploring the world of craft cocktails today. Discover new flavors, impress your friends, and become a master of mixology with the help of this comprehensive and user-friendly app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
