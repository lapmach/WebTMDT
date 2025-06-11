import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <header>
            <div className="container p-0 headerCha">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg_dark padding_tablet">
                    <a className="navbar-brand" href="#">
                        <img src="img/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler margin" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse block-menu" id="navbarSupportedContent">
                        {/* <div class="mr-auto"></div> */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link  text-reset redColor" href="WebGiay.html">Trang Chủ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-reset" href="#">Giới Thiệu</a>
                            </li>
                            <li className="nav-item dropdown hoverMenu">
                                <a className="nav-link text-reset" href="sanPham.html" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Sản Phẩm
                                    <i className="fa-solid fa-chevron-down" />
                                </a>
                                <div className="dropdown-menu bg_dark menuCon">
                                    <a className="dropdown-item " href="sanPham.html">Adidas</a>
                                    <a className="dropdown-item" href="sanPham.html">Nike</a>
                                    <a className="dropdown-item" href="sanPham.html">Converse</a>
                                    <a className="dropdown-item" href="sanPham.html">Puma</a>
                                    <a className="dropdown-item" href="sanPham.html">MLB</a>
                                </div>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-reset" href="#">Tin Tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-reset" href="#">Liên Hệ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex header-right marginLeft">
                        <div className="timKiem">
                            <i className="fa-solid fa-magnifying-glass" />
                            <div className="timKiemChiTiet">
                                <input type="text" placeholder="Tìm kiếm sản phẩm" />
                                <i className="fa-solid fa-magnifying-glass" />
                            </div>
                        </div>
                        <div className="taiKhoan">
                            <Link to = "/login">
                                <i className="fa-solid fa-user" />
                            </Link>
                        </div>
                        <div className="gioHang">
                            <i className="fa-solid fa-cart-shopping">
                                <div className="ThongBaoGioHang">
                                    <div className="headerOf_Notify2">
                                        <h3>Sản phẩm mới thêm</h3>
                                    </div>
                                    <div className="sanPhamThongBao2">
                                        <div className="hinh2">
                                            <img src="img/giaymoi2.jpg" alt="" />
                                        </div>
                                        <div className="text2">
                                            <h4 className="tieuDe2">Giày sneaker cổ cao</h4>
                                        </div>
                                        <div className="gia">
                                            <p>135.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="sanPhamThongBao2">
                                        <div className="hinh2">
                                            <img src="img/giaymoi5.jpg" alt="" />
                                        </div>
                                        <div className="text2">
                                            <h4 className="tieuDe2">Giày adidas thể thao</h4>
                                        </div>
                                        <div className="gia">
                                            <p>125.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="sanPhamThongBao2">
                                        <div className="hinh2">
                                            <img src="img/giaymoi8.jpg" alt="" />
                                        </div>
                                        <div className="text2">
                                            <h4 className="tieuDe2">Dép puma cổ điển</h4>
                                        </div>
                                        <div className="gia">
                                            <p>350.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="sanPhamThongBao2">
                                        <div className="hinh2">
                                            <img src="img/giaymoi7.jpg" alt="" />
                                        </div>
                                        <div className="text2">
                                            <h4 className="tieuDe2">Giày nike cổ cao</h4>
                                        </div>
                                        <div className="gia">
                                            <p>450.000 VNĐ</p>
                                        </div>
                                    </div>
                                    <div className="buttonXemALL2">
                                        <a href="ThanhToan.html" className="btnXemHet2">Xem Giỏ Hàng</a>
                                    </div>
                                </div>
                            </i>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}

export default Header
