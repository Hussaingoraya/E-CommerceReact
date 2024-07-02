// import React from "react";
// import { useParams } from "react-router-dom";
// import { storeData } from "../ApiData/ApiUrl";

// export default function DetailPage() {
//   let { productId } = useParams();
//   let items = storeData.find((p) => p.id ==  productId);

//   if (!items) {
//     return <div className="container text-center">Item not found</div>;
//   }

//   return (
//     <>
//       <div className="container text-center">
//         <div className="row">
//           Hussain aslam
//           <div className="col">{items.title}</div>
//           <div className="col">2 of 2</div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storeData } from "../ApiData/ApiUrl";

export default function DetailPage() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await storeData("products");
        const foundItem = data.find((p) => p.id === parseInt(productId));
        setItem(foundItem);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <div className="container text-center">Loading...</div>;
  }

  if (!item) {
    return <div className="container text-center">Item not found</div>;
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <img src={item.image} alt="" />
        </div>
        <div className="col">
          <div>
            <h1>{item.title}</h1>
          </div>
          <div>
            <h1>Description:</h1>
            <h4> {item.description}</h4>
          </div>
          <div>
            <h2>Price : {item.price}$</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
