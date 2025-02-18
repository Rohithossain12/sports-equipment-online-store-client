import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import MyEquipmentCard from "./MyEquipmentCard";
import { Helmet } from "react-helmet";

const MyEquipmentList = () => {
  const { users } = useContext(AuthContext);
  const { email } = users || {};
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://sports-equipment-online-store-server-three.vercel.app/product-by-email/${email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" min-h-screen container mx-auto px-5">
        <Helmet>
            <title>Sport Specialist | My Equipment List </title>
        </Helmet>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
        {products.map((product) => (
          <MyEquipmentCard
            product={product}
            products={products}
            setProducts={setProducts}
          ></MyEquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default MyEquipmentList;
