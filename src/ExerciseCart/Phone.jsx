import React, { Component } from "react";

export default class Phone extends Component {
  render() {
    const { phone, xemChiTiet,themGioHang } = this.props;
    return (
      <div className="card">
        <img
          src={phone.hinhAnh}
          alt="..."
          height={300}
          className="w-100"
          style={{ objectFit: "contain" }}
        />
        <div className="card-body">
          <p>{phone.tenSP}</p>
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                xemChiTiet(phone);
              }}
            >
              Xem Chi Tiết
            </button>
            <button className="btn btn-danger mx-4" onClick={() => themGioHang(phone)}>Thêm Giỏ Hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
