import { Toaster } from "react-hot-toast";
import Banner from "./Banner/Banner";
import SportingGoods from "./SportingGoods";
import { useLoaderData } from "react-router-dom";
import ProductSection from "./ProductSection";
import { Helmet } from "react-helmet";
import SportsCategory from "./SportsCategory";

// import Banner from "./Banner";

const Home = () => {
  const products = useLoaderData();

  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>Sport Specialist | Home </title>
      </Helmet>

      <div className="">
        <Banner></Banner>
      </div>
      {/* Product Section Limit 6 card  */}
      <section className="container mx-auto px-5 mt-8 mb-10">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Our Products
        </h1>
        <p className="text-center mt-3 mb-5">
          Discover high-quality sports gear designed for every athlete. From
          beginner to pro, we have equipment for all levels. Shop a wide
          selection of gear for various sports and activities. Get ready to
          elevate your performance with the best equipment!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductSection
              product={product}
              key={product._id}
            ></ProductSection>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-5">
        <SportsCategory></SportsCategory>
      </section>
      <section className="container mx-auto px-5">
        <SportingGoods></SportingGoods>
      </section>
      <Toaster />
    </div>
  );
};

export default Home;
