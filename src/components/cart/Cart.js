import React from "react";
import "./Cart.css";

const Cart = ({ items, onRemove }) => {
  return (
    <div className="mt-2">
      <h1 className="text-success">Your Cart Lists</h1>
      <div className=" container cart-item mt-3">
        {items.length === 0 ? (
          <div
            className="d-flex flex-column justify-content-center"
            style={{ height: "30vh" }}
          >
            <p className="fs-4"> Your cart is empty!</p>
            <p>Explore our wide selection and find something you like</p>
          </div>
        ) : (
          <div className="container">
            {items.map((item) => (
              <div
                className="cart-item-list d-flex justify-content-between mt-3"
                key={item.id}
              >
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "100px" }}
                      className="me-2"
                    />
                    <h5>
                      {item.modelName}
                      <br />
                      <span className="text-secondary">{item.modelNo}</span>
                    </h5>
                  </div>
                  <div className="ms-5 d-flex  align-items-center">
                    <div className=" fw-bold mb-2"></div>
                  </div>
                </div>
                <div className="d-flex  align-items-center">
                  <span className="fw-bold me-2">{item.price}</span>
                  <button className="btn btn-warning me-2">Buy</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      onRemove(item.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {items.length <= 1 ? (
          <div className="mb-2" style={{ height: "5vh" }}></div>
        ) : (
          <div className="d-flex justify-content-end align-items-center">
            <button className="btn-orange fw-bold mb-2 ">Place Orders</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
