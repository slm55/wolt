import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import AllProducts from "../components/AllProducts/AllProducts";

function Home() {
  return (
    <div className="home">
      <Header />
      <Nav />
      <AllProducts />
      <Footer />
    </div>
  );
}

export default Home;
