import React from "react";

const Navbar = () => {
    return (
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top shadow-sm">
            <div className="container-fluid mx-3">
                <span className="fs-4 fw-bold mx-3 mb-1">
                    E-Commerce
                </span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_nav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown mx-2">
                            <span
                                className="nav-link dropdown-toggle"
                                id="navbarDarkDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Men
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDarkDropdownMenuLink"
                            >
                                <li>
                                    <span className="dropdown-item">Casual Shoes</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Formal Shoes</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Sports Shoes</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Sneakers</span>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <span
                                className="nav-link dropdown-toggle"
                                id="navbarDarkDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Women
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDarkDropdownMenuLink"
                            >
                                <li>
                                    <span className="dropdown-item">Boots</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Casual Shoes</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Sports Shoes</span>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <span
                                className="nav-link dropdown-toggle"
                                id="navbarDarkDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Kids
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDarkDropdownMenuLink"
                            >
                                <li>
                                    <span className="dropdown-item">Casual Shoes</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">School Shoes</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Sports Shoes</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <div className="input-group border rounded">
                                <div className="input-group-prepend border-0">
                                    <button
                                        id="button-addon4"
                                        type="button"
                                        className="btn btn-link text-dark shadow-none cursor-default"
                                    >
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                                <input
                                    type="search"
                                    placeholder="Search"
                                    aria-describedby="button-addon4"
                                    className="form-control bg-none border-0 shadow-none"
                                />
                            </div>
                        </li>
                        <li className="nav-item dropdown mx-1">
                            <span
                                className="nav-link dropdown-toggle"
                                id="navbarDarkDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-user mx-2"></i>Profile
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDarkDropdownMenuLink"
                            >
                                <li>
                                    <span className="dropdown-item">Orders</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Contact Us</span>
                                </li>
                                <hr />
                                <li>
                                    <span className="dropdown-item">Edit Profile</span>
                                </li>
                                <li>
                                    <span className="dropdown-item">Logout</span>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item mx-1">
                            <span className="nav-link">
                                <i className="fas fa-shopping-cart mx-2"></i>Cart
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
