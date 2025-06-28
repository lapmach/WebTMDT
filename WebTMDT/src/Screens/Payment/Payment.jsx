import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../../redux/Slices/userSlice';
import { fetchCart } from '../../redux/Slices/cartSLice';
import { Link } from 'react-router-dom';

const Payment = () => {
    const dispatch = useDispatch();
    const SHIPPING_FEE = 5000;
    const [count , setCount ] = useState(1);

    useEffect(() => {
        dispatch(fetchCart());
    }, [dispatch]);

    const cart = useSelector((state) => state.cart.cart);
    console.log("cart", cart);
    
    let provisionalAmount = 0 ;
   if(cart.length > 0){
        provisionalAmount = cart.reduce((prev , cur) => prev.price * prev.quantity + cur.price * cur.quantity);
   }
   console.log("sum" , provisionalAmount);
   
    
    
    const handleDeleteCart = (id) => {
        dispatch(deleteCart(id));
    }
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
                                            {
                                                cart.map(item => (
                                                    <tr key={item.id} className="chiTietThanhToan">
                                                        <td><img src={item.img} alt="" /></td>
                                                        <td><div>
                                                            <span className="mrLeft small-heading">{item.name}</span>
                                                            <div className="d-flex mt-2">
                                                                <button onClick={() => { (count <= 1) ? setCount((count) => count = 1) : setCount((count) => count - 1) }} className="btnTangGiamSL">-</button>
                                                                <input type="text" onChange={(e) => { setCount(Number(e.target.value)) }} value={item.quantity} style={{ width: '50px', border: '1px solid #00000024', textAlign: 'center', height: '22px' }} role="spinbutton" />
                                                                <button onClick={() => {setCount(count+1)}} className="btnTangGiamSL">+</button>
                                                            </div>
                                                        </div></td>
                                                        <td><span>{item.price}VNĐ</span></td>
                                                        <td> <i onClick={() => handleDeleteCart(item.id)} className="fa-solid fa-circle-xmark"></i></td>
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>
                                    <hr />
                                    <div className="chiTietThanhToan1" style={{ marginLeft: '20px' }}>
                                        <p>Tạm tính</p>
                                        <p id="giaTamTinh">{provisionalAmount} VNĐ</p>
                                    </div>
                                    <div className="chiTietThanhToan1" style={{ marginLeft: '20px' }}>
                                        <p>Phí vận chuyển</p>
                                        <p>{SHIPPING_FEE} VNĐ</p>
                                    </div>
                                    <hr />
                                    <div className="chiTietThanhToan1" style={{ marginLeft: '20px' }}>
                                        <h4>Tổng cộng:</h4>
                                        <p id="giaTong">{provisionalAmount + SHIPPING_FEE} VNĐ</p>
                                    </div>
                                    <div className="chiTietThanhToan1">
                                        <Link to={"/home"} style={{ cursor: 'pointer' }} className="mt-3 mx-3 anchor"><i className="fa-solid fa-chevron-left" />Quay lại trang chủ</Link>
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
