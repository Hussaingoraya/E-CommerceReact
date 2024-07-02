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
import { useActionData, useParams } from "react-router-dom";
import { storeData } from "../ApiData/ApiUrl";
import "./home.css";

export default function DetailPage() {
  const { productId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(1);
  const [totalprice, setTotalprice] = useState(0);

  const increasebtn = () => {
    setCounter(counter + 1);
    setTotalprice((counter + 1) * item.price);
  };
  const decreasebtn = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
      setTotalprice((counter - 1) * item.price);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await storeData("products");
        const foundItem = data.find((p) => p.id === parseInt(productId));
        setItem(foundItem);
        setTotalprice(foundItem.price);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (!item) {
    return <div className="container text-center">Item not found</div>;
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img className="card-img" src={item.image} alt="" />
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
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add to cart
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container text-center">
                <div className="row align-items-center">
                  <div className="col">
                    <img className="cart-image" src={item.image} alt="" />
                  </div>
                  <div className="col">
                    <h5>{item.title}</h5>
                  </div>
                  <div className="col">
                    <button className="counter" onClick={decreasebtn}>
                      -
                    </button>
                    {counter}
                    <button className="counter" onClick={increasebtn}>
                      +
                    </button>
                    <h5>Price : {totalprice}$</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
