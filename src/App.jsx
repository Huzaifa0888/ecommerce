import React from "react";
import Header from "./Components/header";
import Herosection from "./Components/herosection";
import ProductList from "./Components/productList";
import Product from "./Components/product";
import Carausel from "./Components/carousel";
import FeaturedProducts from "./Components/featuredProducts";
import FirstCarausel from "./Components/firstCarousel";
import Signup from "./Components/signup";
import Footer from "./Components/footer";
import Car from "./Components/count";



function App() {
  return (
    <>
      <section className="bg-gray-100">
        <Header></Header>
        <Herosection></Herosection>
        <FirstCarausel></FirstCarausel>
        <ProductList></ProductList>
        <Product></Product>
        <FeaturedProducts></FeaturedProducts>
        <Carausel></Carausel>
        <Signup></Signup>
        <Footer></Footer>
      </section>
        {/* <Car></Car> */}
    </>
  );
}

export default App;
