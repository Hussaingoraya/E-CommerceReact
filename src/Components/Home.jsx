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
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let response = await storeData("products");
      console.log(response);
      setLoading(false);
      setecomData(response);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {ecomData.map((item, index) => (
            <div className="col" key={index}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>{item.category}</p>
                  <h5 className="card-title">{item.title}</h5>
                  <h4>Price : {item.price}$</h4>
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
