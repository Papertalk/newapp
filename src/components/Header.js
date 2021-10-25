import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Header extends Component {
  render() {
    return (
      <div className="NavBar">
        <ul className="nav">
          <li className="NavItem">
            <Link to="/" className="NavBar-Title">
              Garments Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/carts" className="NavBar-cart">
              <i className="fa fa-shopping-cart"></i> {this.props.numberCart}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Header);
