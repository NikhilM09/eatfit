import logo from "./logo.svg";
import "./App.css";
import Logo from "./assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-preview.png"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider } from "react-router-dom";
// import Footer123 from "./components/Footer";


const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      {/* <Body /> */}
      {/* <Footer123 /> */}
    </>
  );
};

export default App;
