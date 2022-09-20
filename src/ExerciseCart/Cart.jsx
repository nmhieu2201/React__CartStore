import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { gioHang, tongSoLuong, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div className="text-end">
        <span
          href=""
          data-bs-toggle="modal"
          data-bs-target="#modalId"
          style={{
            cursor: "pointer",
            fontSize: "30px",
            color: "red",
            fontWeight: "bold",
          }}
        >
          Giỏ hàng ({tongSoLuong})
        </span>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Giỏ hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Số lượng</td>
                      <td>Đơn giá</td>
                      <td>Thành tiền</td>
                    </tr>
                  </thead>
                  <tbody>
                    {gioHang.map((phone, index) => {
                      return (
                        <tr key={index}>
                          <td>{phone.maSP}</td>
                          <td>
                            <img
                              src={phone.hinhAnh}
                              alt="..."
                              width={50}
                              height={75}
                              style={{ objectFit: "contain" }}
                            />
                          </td>
                          <td>{phone.tenSP}</td>
                          <td>
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => tangGiamSoLuong(phone.maSP, true)}
                            >
                              +
                            </button>
                            {phone.soLuong}
                            <button
                              className="btn btn-primary mx-2"
                              onClick={() => tangGiamSoLuong(phone.maSP, false)}
                            >
                              -
                            </button>
                          </td>
                          <td>{phone.giaBan.toLocaleString()}</td>
                          <td>
                            {(phone.soLuong * phone.giaBan).toLocaleString()}
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => xoaGioHang(phone.maSP)}
                            >
                              Xoá
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <td>Tổng tiền</td>
                      <td>
                        {this.props.gioHang.reduce((tongTien, sp, index) => {
                          return (tongTien += sp.soLuong * sp.giaBan);
                        }, 0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
