import React, { Component } from "react";
import Phone from "./Phone";

export default class ListPhone extends Component {
  renderListPhone = () => {
    const { dataPhoneCart, xemChiTiet,themGioHang } = this.props;
    return dataPhoneCart.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <Phone phone={phone} xemChiTiet={xemChiTiet} themGioHang={themGioHang}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Phone List</h3>
        <div className="row">{this.renderListPhone()}</div>
      </div>
    );
  }
}
