import React, { use, useEffect } from "react";
import Slider from "../Slider/Slider";
import Events from "../Events/Events";
import Venue from "../Venue/Venue";
import Faq from "../../components/Faq/Faq";
import { AuthContext } from "../../components/context/AuthProvider";
import Loader from "../../components/Loading/Loader";

const Home = () => {
  const { loading } = use(AuthContext);
  
  useEffect(() => {
    document.title = "Event - Finder";
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Slider></Slider>
      <Events></Events>
      <Venue></Venue>
      <Faq />
    </>
  );
};

export default Home;
