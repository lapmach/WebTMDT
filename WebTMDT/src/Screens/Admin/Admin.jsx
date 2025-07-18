import React, { useEffect } from 'react'
import "./Admin.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, fetchProduct } from '../../redux/Slices/productsSlice';
import { fetchCategories } from '../../redux/Slices/categoriesSlice';
const Admin = ({setEditPro}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.products.products);
    const currentUser = localStorage.getItem("currentUser");

    useEffect(() => {
        if (currentUser) {
            dispatch(fetchProduct())
            dispatch(fetchCategories())
        }
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    }

    const handleEdit = (product) => {
        setEditPro(product);
        navigate("/addProduct");
    }
   

    return (
        <div>
            <div className="wrapper">
                <nav id="sidebar" className="sidebar js-sidebar">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="index.html">
                            <span className="align-middle">Roman</span>
                        </a>
                        <ul className="sidebar-nav">
                            <li className="sidebar-header">
                                Pages
                            </li>
                            <li className="sidebar-item active">
                                <a className="sidebar-link" href="index.html">
                                    <i className="align-middle" data-feather="sliders" /> <span className="align-middle">Dashboard</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="pages-profile.html">
                                    <i className="align-middle" data-feather="user" /> <span className="align-middle">Profile</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="pages-sign-in.html">
                                    <i className="align-middle" data-feather="log-in" /> <span className="align-middle">Sign In</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="pages-sign-up.html">
                                    <i className="align-middle" data-feather="user-plus" /> <span className="align-middle">Sign Up</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="pages-blank.html">
                                    <i className="align-middle" data-feather="book" /> <span className="align-middle">Blank</span>
                                </a>
                            </li>
                            <li className="sidebar-header">
                                Tools &amp; Components
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="ui-buttons.html">
                                    <i className="align-middle" data-feather="square" /> <span className="align-middle">Buttons</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="ui-forms.html">
                                    <i className="align-middle" data-feather="check-square" /> <span className="align-middle">Forms</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="ui-cards.html">
                                    <i className="align-middle" data-feather="grid" /> <span className="align-middle">Cards</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="ui-typography.html">
                                    <i className="align-middle" data-feather="align-left" /> <span className="align-middle">Typography</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="icons-feather.html">
                                    <i className="align-middle" data-feather="coffee" /> <span className="align-middle">Icons</span>
                                </a>
                            </li>
                            <li className="sidebar-header">
                                Plugins &amp; Addons
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="charts-chartjs.html">
                                    <i className="align-middle" data-feather="bar-chart-2" /> <span className="align-middle">Charts</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a className="sidebar-link" href="maps-google.html">
                                    <i className="align-middle" data-feather="map" /> <span className="align-middle">Maps</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="main">
                    <nav className="navbar navbar-expand navbar-light navbar-bg">
                        <a className="sidebar-toggle js-sidebar-toggle">
                            <i className="hamburger align-self-center" />
                        </a>
                        <div className="navbar-collapse collapse">
                            <ul className="navbar-nav navbar-align">
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            {/* <i className="align-middle" data-feather="bell" /> */}
                                            <i className="align-middle fa-solid fa-bell mt-2" style={{ color: "grey", fontSize: "20px" }}></i>
                                            <span className="indicator">4</span>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                        <div className="dropdown-menu-header">
                                            4 New Notifications
                                        </div>
                                        <div className="list-group">
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-danger" data-feather="alert-circle" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Update completed</div>
                                                        <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                        <div className="text-muted small mt-1">30m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-warning" data-feather="bell" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Lorem ipsum</div>
                                                        <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-primary" data-feather="home" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">Login from 192.186.1.8</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <i className="text-success" data-feather="user-plus" />
                                                    </div>
                                                    <div className="col-10">
                                                        <div className="text-dark">New connection</div>
                                                        <div className="text-muted small mt-1">Christina accepted your request.</div>
                                                        <div className="text-muted small mt-1">14h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="#" className="text-muted">Show all notifications</a>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                                        <div className="position-relative">
                                            <i className="align-middle" data-feather="message-square" />
                                        </div>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                        <div className="dropdown-menu-header">
                                            <div className="position-relative">
                                                4 New Messages
                                            </div>
                                        </div>
                                        <div className="list-group">
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Vanessa Tucker</div>
                                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                        <div className="text-muted small mt-1">15m ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">William Harris</div>
                                                        <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                        <div className="text-muted small mt-1">2h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Christina Mason</div>
                                                        <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                        <div className="text-muted small mt-1">4h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <div className="row g-0 align-items-center">
                                                    <div className="col-2">
                                                        <img src="img/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                                                    </div>
                                                    <div className="col-10 ps-2">
                                                        <div className="text-dark">Sharon Lessman</div>
                                                        <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                                        <div className="text-muted small mt-1">5h ago</div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="dropdown-menu-footer">
                                            <a href="#" className="text-muted">Show all messages</a>
                                        </div>
                                    </div>
                                </li> */}
                                <li className="nav-item dropdown">
                                    <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                                        <i className="align-middle" data-feather="settings" />
                                    </a>
                                    <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                                        <img src="/img/LyLe.png" className="avatar img-fluid rounded me-1" alt="Roman" /> <span className="text-dark">Roman</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end" style={{ color: 'black' }}>
                                        <a className="dropdown-item" style={{ color: 'black' }} href="pages-profile.html"><i className="align-middle me-1" data-feather="user" /> Profile</a>
                                        <a className="dropdown-item" style={{ color: 'black' }} href="#"><i className="align-middle me-1" data-feather="pie-chart" /> Analytics</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" style={{ color: 'black' }} href="index.html"><i className="align-middle me-1" data-feather="settings" /> Settings &amp; Privacy</a>
                                        <a className="dropdown-item" style={{ color: 'black' }} href="#"><i className="align-middle me-1" data-feather="help-circle" /> Help Center</a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" style={{ color: 'black' }} href="#">Log out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="content">
                        <div className="container-fluid p-0">
                            <h1 className="h3 mb-3"><strong>Analytics</strong> Dashboard</h1>
                            <div className="row">
                                <div className="col-xl-6 col-xxl-5 d-flex">
                                    <div className="w-100">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col mt-0">
                                                                <h5 className="card-title">Sales</h5>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="stat text-primary">
                                                                    <i class="fa-solid fa-truck"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 className="mt-1 mb-3">2.382</h1>
                                                        <div className="mb-0">
                                                            <span className="text-danger">-3.65%</span>
                                                            <span className="text-muted">Since last week</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col mt-0">
                                                                <h5 className="card-title">Visitors</h5>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="stat text-primary">
                                                                    <i class="fa-solid fa-users"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 className="mt-1 mb-3">14.212</h1>
                                                        <div className="mb-0">
                                                            <span className="text-success">5.25%</span>
                                                            <span className="text-muted">Since last week</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col mt-0">
                                                                <h5 className="card-title">Earnings</h5>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="stat text-primary">
                                                                    <i class="fa-solid fa-dollar-sign"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 className="mt-1 mb-3">$21.300</h1>
                                                        <div className="mb-0">
                                                            <span className="text-success">6.65%</span>
                                                            <span className="text-muted">Since last week</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col mt-0">
                                                                <h5 className="card-title">Orders</h5>
                                                            </div>
                                                            <div className="col-auto">
                                                                <div className="stat text-primary">
                                                                    <i class="fa-solid fa-cart-shopping"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h1 className="mt-1 mb-3">64</h1>
                                                        <div className="mb-0">
                                                            <span className="text-danger">-2.25%</span>
                                                            <span className="text-muted">Since last week</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-xxl-7">
                                    <div className="card flex-fill w-100">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5 className="card-title mb-0">Recent Movement</h5>
                                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" style={{ fontSize: "24px" }} href="#" data-bs-toggle="dropdown">

                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end" style={{ color: 'black' }}>
                                                <Link className="dropdown-item" style={{ color: 'black' }} href="pages-profile.html"><i className="align-middle me-1" data-feather="user" /> Thêm sản phẩm</Link>

                                            </div>
                                        </div>
                                        <div className="card-body py-3">
                                            <div className="chart chart-sm">
                                                <canvas id="chartjs-dashboard-line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col-12 col-md-6 col-xxl-3 d-flex order-2 order-xxl-3">
                                    <div className="card flex-fill w-100">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Browser Usage</h5>
                                        </div>
                                        <div className="card-body d-flex">
                                            <div className="align-self-center w-100">
                                                <div className="py-3">
                                                    <div className="chart chart-xs">
                                                        <canvas id="chartjs-dashboard-pie" />
                                                    </div>
                                                </div>
                                                <table className="table mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>Chrome</td>
                                                            <td className="text-end">4306</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Firefox</td>
                                                            <td className="text-end">3801</td>
                                                        </tr>
                                                        <tr>
                                                            <td>IE</td>
                                                            <td className="text-end">1689</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-xxl-6 d-flex order-3 order-xxl-2">
                                    <div className="card flex-fill w-100">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Real-Time</h5>
                                        </div>
                                        <div className="card-body px-4">
                                            <div id="world_map" style={{ height: '350px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
                                    <div className="card flex-fill">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Calendar</h5>
                                        </div>
                                        <div className="card-body d-flex">
                                            <div className="align-self-center w-100">
                                                <div className="chart">
                                                    <div id="datetimepicker-dashboard" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-12 col-lg-8 col-xxl-9 d-flex">
                                    <div className="card flex-fill">
                                        <div className="card-header d-flex justify-content-between">
                                            <h5 className="card-title mb-0">Sản phẩm</h5>
                                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" style={{ fontSize: "24px" }} href="#" data-bs-toggle="dropdown">

                                            </a>
                                            <div className="dropdown-menu dropdown-menu-end" style={{ color: 'black' }}>
                                                <Link to={"/addProduct"} className="dropdown-item" style={{ color: 'black' }}><i className="align-middle me-1"/> Thêm sản phẩm</Link>

                                            </div>
                                        </div>
                                            <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Tên sản phẩm</th>
                                                    <th>Hình ảnh</th>
                                                    <th>Giá</th>
                                                    <th>Ngày tạo</th>
                                                    <th>Chức năng</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Array.isArray(product) && product.map(item => (
                                                        <tr key={item.id} className='chiTietThanhToan' style={{ lineHeight: "55px" }}>
                                                            <td>{item.name}</td>
                                                            <td><img src={item.img} alt="" /></td>
                                                            <td>{item.price}</td>
                                                            <td>{item.createdAt}</td>
                                                            <td>
                                                                <i class="fa-solid fa-pen-to-square mx-3" onClick={() => handleEdit(item)}></i>
                                                                <i class="fa-solid fa-circle-xmark" onClick={() => handleDelete(item.id)}></i>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 col-xxl-3 d-flex">
                                    <div className="card flex-fill w-100">
                                        <div className="card-header">
                                            <h5 className="card-title mb-0">Monthly Sales</h5>
                                        </div>
                                        <div className="card-body d-flex w-100">
                                            <div className="align-self-center chart chart-lg">
                                                <canvas id="chartjs-dashboard-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="footer">
                        <div className="container-fluid">
                            <div className="row text-muted">
                                <div className="col-6 text-start">
                                    <p className="mb-0">
                                        <Link className="text-muted" target="_blank"><strong>Roman</strong></Link> - <a className="text-muted" href="https://Roman.io/" target="_blank"><strong>Bootstrap Admin Template</strong></a>								©
                                    </p>
                                </div>

                            </div>
                        </div>
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Admin
