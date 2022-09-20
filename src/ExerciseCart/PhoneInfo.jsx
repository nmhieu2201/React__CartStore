import React, { Component } from 'react'

export default class PhoneInfo extends Component {
  render() {
    const {phone} = this.props
    return (
        <div className="mt-3">
        <div className="row">
          <div className="col-4">
            <h3 className='text-center'>{phone.tenSP}</h3>
            <img
              src={phone.hinhAnh}
              height={300}
              className="w-100"
              style={{ objectFit: "contain" }}
              alt="..."
            />
          </div>
          <div className="col-8">
            <h3 className='text-center'>Thông tin chi tiết</h3>
            <table className="table">
              <thead>
                <tr>
                  <td>Màn Hình</td>
                  <td>{phone.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{phone.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Cam Trước</td>
                  <td>{phone.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Cam sau</td>
                  <td>{phone.cameraSau}</td>
                </tr>
                <tr>
                  <td>Ram</td>
                  <td>{phone.ram}</td>
                </tr>
                <tr>
                  <td>Rom</td>
                  <td>{phone.rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
