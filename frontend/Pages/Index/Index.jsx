import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import LastCourse from "../../Components/LastCourse/LastCourse";
import LatestArticle from "../../Components/LatestArticle/LatestArticle";
import PopularCourses from "../../Components/PopularCourses/PopularCourses";
import PreSellCourses from "../../Components/PreSellCourses/PreSellCourses";
import "./Index.css";

const Index = () => {
  return (
    <>
      <Header />
      <LastCourse />
      <AboutUs/>
      <PopularCourses/>
      <PreSellCourses/>
      <LatestArticle/>
      <Footer/>
    </>
  );
};

export default Index;
