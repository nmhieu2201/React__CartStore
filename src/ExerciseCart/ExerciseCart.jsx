import React, { Component } from "react";
import ListPhone from "./ListPhone";
import Cart from "./Cart";
import PhoneInfo from "./PhoneInfo";
const dataPhoneCart = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
    soLuong: 1,
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
    soLuong: 1,
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
    soLuong: 1,
  },
];
export default class ExerciseCart extends Component {
  state = {
    spChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
      soLuong: 1,
    },
    gioHang: [],
  };
  xemChiTiet = (phone) => {
    this.setState({
      spChiTiet: phone,
    });
  };
  themGioHang = (phone) => {
    let phoneCart = {
      maSP: phone.maSP,
      tenSP: phone.tenSP,
      giaBan: phone.giaBan,
      hinhAnh: phone.hinhAnh,
      soLuong: 1,
    };
    let cartUpdate = [...this.state.gioHang];
    let index = cartUpdate.findIndex((sp) => sp.maSP === phoneCart.maSP);
    if (index !== -1) {
      cartUpdate[index].soLuong += 1;
    } else {
      cartUpdate.push(phoneCart);
    }
    this.setState({ gioHang: cartUpdate });
  };
  xoaGioHang = (maSP) => {
    let cartUpdate = [...this.state.gioHang].filter((sp) => sp.maSP !== maSP);
    this.setState({
      gioHang: cartUpdate,
    });
  };
  tangGiamSoLuong = (maSP, tangGiam) => {
    let cartUpdate = [...this.state.gioHang];
    let index = cartUpdate.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      cartUpdate[index].soLuong += 1;
    } else {
      if (cartUpdate[index].soLuong > 1) {
        cartUpdate[index].soLuong -= 1;
      }
    }
    this.setState({ gioHang: cartUpdate });
  };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, sp, index) => {
      return (tsl += sp.soLuong);
    }, 0);
    return (
      <div className="container">
        <Cart
          gioHang={this.state.gioHang}
          tongSoLuong={tongSoLuong}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <ListPhone
          dataPhoneCart={dataPhoneCart}
          xemChiTiet={this.xemChiTiet}
          themGioHang={this.themGioHang}
        />
        <PhoneInfo phone={this.state.spChiTiet} />
      </div>
    );
  }
}
