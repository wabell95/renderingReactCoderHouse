import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, total, deleteFromCart } = useCartContext();

  return (
    <>
      {cart && cart.length > 0 ? (
        <div className="container mt-4">
          <h1>Total: ${total()}</h1>
          {cart.map((item) => {
            return (
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col">
                    <div className="card-body">
                      <h5 className="card-title">{`Producto: ${item.title}`}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{`Precio: $ ${item.price}`}</h6>
                      <h6 className="card-subtitle mb-2 text-muted">{`Cantidad: ${item.quantity} unidades`}</h6>
                      <h6 className="card-subtitle mb-2 ">{`Total: ${
                        item.price * item.quantity
                      }`}</h6>
                      <button type="button" className="btn btn-light" onClick={() => deleteFromCart(item)}>
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="container mt-4">
            <h1>Tu carrito esta vacio</h1>
            <Link className="card-link" to="/">Volver al inicio</Link>
        </div>
      )}
    </>
  );
};

export default Cart;