import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";

export class Product extends Component {
  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;

    if (_products.length > 0) {
      return (
        <div className="container">
          {_products.map((item, index) => (
            <div className="gallery" key={index}>
              <div className="content">
                <div className="top-content">
                  <div className="top-content-left">
                    <div className="Heading">Gender:{item.gender}</div>
                  </div>
                  <div className="top-content-right">
                    Colour: {item.primaryColour}
                  </div>
                </div>
                <img className="image-content" alt="" src={item.searchImage} />
                <h3>{item.brand}</h3>
                <p>{item.productName}</p>
                <h6>₹ {item.price}</h6>

                <button
                  className="buy-1"
                  onClick={() => this.props.AddCart(item)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="Loading-content">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
