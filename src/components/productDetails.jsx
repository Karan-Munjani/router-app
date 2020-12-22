import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
    // this.props.history.push("/products"); will add prev url to history so back button navigates to prev URL
    this.props.history.replace("/products"); //will replace current address with the new one so no any prev URL's Histroy
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
