import Carousel from "../components/Carousel ";
import Navbar from "../components/Navbar";
import "./Home.scss";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="titleSection">
        <h1>Featured Products</h1>
        <p>Explore and discover variety of products</p>
      </div>
      <Carousel />
    </div>
  );
}

export default Home;
