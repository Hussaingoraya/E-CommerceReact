import React, { useEffect, useState } from "react";
import { storeData } from "../ApiData/ApiUrl";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleOnClick = (productId) => {
    navigate("/details/" + productId);
  };
  let [ecomData, setecomData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await storeData("products");
      console.log(response);
      setecomData(response);
    };
    getData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {ecomData.map((item, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h4>Price : {item.price}$</h4>
                  <h5>Ratings : {item.rating.rate}</h5>
                  {/* <p className="card-text">{item.description}</p> */}
                </div>
              </div>
              <button
                className="btn btn-primary my-2"
                onClick={() => handleOnClick(item.id)}
              >
                View Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
