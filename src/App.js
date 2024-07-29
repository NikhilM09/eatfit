import logo from "./logo.svg";
import "./App.css";
import Logo from "./assets/images/png-clipart-logo-brand-font-food-product-restaurant-logo-design-food-label-thumbnail-removebg-preview.png"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider } from "react-router-dom";
import {useEffect, useState} from 'react'
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/store";


// import Footer123 from "./components/Footer";

const App = () => {
  const [name, setName] = useState("")

  useEffect(()=>{
    //api call for authentication
    const data = "nitesh"
    setName(data)
  }, [])

  return (
    <Provider store={appStore}>
    <Header />
      <UserContext.Provider value={{username:name, setName}}>
      <Outlet/>
      {/* <Body /> */}
      {/* <Footer123 /> */}
    </UserContext.Provider>
    </Provider>
  );
};

export default App;
