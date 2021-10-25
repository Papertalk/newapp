import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
} from "../actions/index";

function Cart({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart }) {
  const history = useHistory();

  console.log("items:", items);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });

  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-IN");
  }

  return (
    <div className="cart-container">
      <button className="back" onClick={() => history.push("/")}>
        Back
      </button>

      <table className="cart-content">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {ListCart.map((item, key) => {
            return (
              <tr key={key}>
                <td>
                  <i
                    className="badge badge-danger"
                    onClick={() => DeleteCart(key)}
                  >
                    X
                  </i>
                </td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    alt=""
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>₹ {item.price}</td>
                <td>
                  <span
                    className="cart-btn-primary"
                    onClick={() => DecreaseQuantity(key)}
                  >
                    -
                  </span>
                  <span className="btn btn-info">{item.quantity}</span>
                  <span
                    className="cart-btn-primary"
                    onClick={() => IncreaseQuantity(key)}
                  >
                    +
                  </span>
                </td>
                <td> ₹ {TotalPrice(item.price, item.quantity)}</td>
              </tr>
            );
          })}
          <tr>
            <td colSpan="5">
              <p>Total Carts</p>
            </td>
            <td>
              <p>₹ {Number(TotalCart).toLocaleString("en-IN")}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state._todoProduct,
  };
};

export default connect(mapStateToProps, {
  IncreaseQuantity,
  DecreaseQuantity,
  DeleteCart,
})(Cart);
