import React, { useEffect, useState } from "react";
import axios from "axios";

const WayfairProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://wayfair.p.rapidapi.com/products/list",
        
        headers: {
          "X-RapidAPI-Key":
            "fd97ccea40mshf5e99247ef2ca55p19ca24jsnfbb63dde9cdd",
          "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const data = response.data?.response?.data.category.browse.products || [] ;
        console.log(data);
        setProductList(data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {productList.map((product, index) => (
        <div key={index}>
            <img src={product.shipping.url || "https://assets.wfcdn.com/im/33986792/resize-h800-w800%5Ecompr-r85/2385/238584856/Wayfair+Basics%C2%AE+Thermal+Blackout+Grommet+Curtain+Panel.jpg"} alt="img" />
          <p>Promo Text: {product.promo_text || "N/A"}</p>
          <p>
            Price Saving:{" "}
            {product.pricing?.customerPrice?.unitPrice?.value || "N/A"}
          </p>
          <p>Supplier: {product.manufacturer?.name || "N/A"}</p>
          <p>Delivery: {product.shipping?.messages[0]?.text || "N/A"}</p>
          <hr />
        </div>
      ))}

      
    </div>
  );
};

export default WayfairProductList;
