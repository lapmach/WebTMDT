import React from 'react'
import "./Payment.css"
const Payment = () => {
    return (
        <div>
            <div>
                <div className="container-fluid bg-dark bg-img p-5 mb-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-4 text-uppercase text-white">Trang Thanh Toán</h1>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Products Start */}
                <div className="container-fluid about py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4">
                                <form action="/action_page.php">
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Họ Tên:</label>
                                        <input type="text" className="form-control" id="name" placeholder="Enter name" name="pswd" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Số điện thoại:</label>
                                        <input type="number" className="form-control" id="phone" placeholder="Enter phone number" name="pswd" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Địa chỉ:</label>
                                        <input type="text" className="form-control" id="address" placeholder="Enter address" name="pswd" />
                                    </div>
                                    <label htmlFor="comment">Ghi chú:</label>
                                    <textarea className="form-control" rows={5} id="comment" name="text" defaultValue={""} />
                                </form>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <label htmlFor="comment" className="mt-3">Vận chuyển:</label>
                                <div className="form-check mt-2 divBorder">
                                    <input type="radio" className="form-check-input" id="radio1" name="optradio1" defaultValue="option" />Giao hàng tận nơi
                                    <label className="form-check-label" htmlFor="radio1" />
                                    <span id="giaVanChuyen" style={{ marginLeft: '110px' }}>5$</span>
                                </div>
                                <label htmlFor="comment" className="mt-4">Thanh Toán:</label>
                                <div className="form-check mt-2 divBorder">
                                    <input type="radio" className="form-check-input " id="phuongThucThanhToan" name="optradio" defaultValue="option1" />Thanh toán khi nhận hàng
                                    <label className="form-check-label" htmlFor="radio" />
                                    <i className="fa-regular fa-money-bill-1" style={{ color: '#0b92f9', marginLeft: '55px' }} />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="thanhToan">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Đơn Hàng</th>
                                                <th />
                                                <th />
                                            </tr>
                                        </thead>
                                        <tbody id="parentThanhToan">
                                            <tr className="chiTietThanhToan">
                                                <td><img src="./img/Ga1Mieng.jpg" alt=""/></td>
                                                <td><div>
                                                    <h6 className="mrLeft">Ga ran 1 mieng</h6>
                                                    <div className="d-flex">
                                                        <button className="btnTangGiamSL">+</button>
                                                        <input type="text" style={{width: '50px', border: '1px solid #00000024', textAlign: 'center', height: '22px'}} role="spinbutton" />
                                                            <button className="btnTangGiamSL">-</button>
                                                    </div>
                                                </div></td>
                                                <td><span>50$</span></td>
                                                <td> <i className="fa-solid fa-circle-xmark"></i></td>
                                            </tr>
                                            
                                           
                                        </tbody>
                                    </table>
                                    <hr />
                                    <div className="chiTietThanhToan1" style={{ marginLeft: '20px' }}>
                                        <p>Tạm tính</p>
                                        <p id="giaTamTinh">90$</p>
                                    </div>
                                    <div className="chiTietThanhToan1" style={{ marginLeft: '20px' }}>
                                        <p>Phí vận chuyển</p>
                                        <p>5$</p>
                                    </div>
                                    <hr />
                                    <div className="chiTietThanhToan1" style={{ marginLeft: '20px' }}>
                                        <h4>Tổng cộng:</h4>
                                        <p id="giaTong">95$</p>
                                    </div>
                                    <div className="chiTietThanhToan1">
                                        <a href="index.html" style={{ cursor: 'pointer' }} className="mt-3 mx-3 anchor"><i className="fa-solid fa-chevron-left" />Quay lại trang chủ</a>
                                        <button id="btnDatHang" className="btn btn-primary mt-3">ĐẶT HÀNG</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
