
import Header from "../../components/Header/Header";
import RatingTitle from "../../components/RatingTitle/RatingTitle";
import Menu from "../../components/Menu/Menu";
import Top from "../../components/OurTopRestaurants/Top";
import Download from "../../components/Download/Download";
import TopDishes from "../../components/OurTopDishes/TopDishes";


const Home = () => {
  return (
    <>
    <Header />
    <Menu />
    <RatingTitle />
    <Download />
    <Top />
    <TopDishes />

    </>
  );
};

export default Home;
