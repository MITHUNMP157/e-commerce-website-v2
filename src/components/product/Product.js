import React, { useState } from "react";
import "./Product.css";

const Product = ({ onAddToCart, productDetails }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Products </h2>
      <div className="container">
        <div className="row">
          {productDetails.map((product) => (
            <div className="col me-0 col-sm-12 col-md-4 col-lg-3">
              <div key={product.id}>
                <div className="card mb-2" style={{ width: "180px" }}>
                  <div>
                    <img
                      className="card-img-top"
                      src={product.img}
                      style={{ width: "150px", height: "150px" }}
                      alt={product.name}
                    />
                  </div>
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleOpen(product)}
                    >
                      View Full Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {open && selectedProduct && (
            <div className="modal-box" onClick={handleClose} style={{}}>
              <div
                className="modal-content"
                style={{ width: "550px" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn " onClick={handleClose}>
                  &times;
                </button>
                <div className="row mt-3">
                  <div className="col col-sm-12 col-md-6">
                    <img
                      src={selectedProduct.img}
                      alt={selectedProduct.name}
                      style={{ width: "200px", borderRadius: "6px" }}
                    />
                  </div>
                  <div className="col col-sm-12 col-md-6 card">
                    <div className="card-body">
                      <div className="text-start fw-bold text-dark">
                        {selectedProduct.modelName}
                      </div>
                      <div className="text-start fw-bold text-secondary">
                        <span className="text-dark">M.No : </span>
                        {selectedProduct.modelNo}
                      </div>
                      <div className="text-start fw-bold text-secondary">
                        <span className="text-dark">M.Year : </span>
                        {selectedProduct.modelYear}
                      </div>
                      <div className=" text-start mt-4 mb-3">
                        <h4>
                          <span className="text-secondary">Price : </span>
                          <span className="text-dark">
                            {selectedProduct.price}
                          </span>
                        </h4>
                      </div>
                      <div className="cart-btn ">
                        <button
                          className="btn btn-light border fw-bold"
                          onClick={() => {
                            onAddToCart(selectedProduct);
                            handleClose();
                          }}
                        >
                          Add to Card
                        </button>
                        <button className="btn btn-warning fw-bold">
                          Buy at{selectedProduct.price}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
