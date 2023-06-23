import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../api";
import Banner from "./Banner/Banner";
import Branding from "./Branding/Branding";
import CategoricalProducts from "./CategoricalProducts/CategoricalProducts";
import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Testimonial from "./Testimonial/Testimonial";
import Trending from "./Trending/Trending";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getCategories();
      dispatch({
        type: "set_categories",
        payload: { data, selectedCategoryIndex: 0 },
      });
    };
    fetchCategories();
  }, [dispatch]);
  return (
    <>
      <Banner />
      <Trending />
      <CategoricalProducts />
      <Featured />
      <Branding />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
