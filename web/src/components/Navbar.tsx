import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import axios, { AxiosError } from "axios";

import { baseUri, menMenu, womenMenu } from "../assets/constants";

import { ApiContext } from '../contexts/ApiContext'

const Navbar = () => {
    const { user, setModal, setUser } = useContext(ApiContext);

    const history = useHistory();

    const logout = () => {
        axios.post(baseUri + "/api/auth/logout/")
            .then(() => {
                setUser?.(false);
            })
            .catch((err: AxiosError) => console.log(err))
    }

    return (
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top shadow-sm">
            <div className="container-fluid mx-3">
                <Link className="text-decoration-none text-dark" to="/">
                    <span className="fs-4 fw-bold mx-3 mb-1">
                        E-Commerce
                    </span>
                </Link>
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
                                {menMenu.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span onClick={() => history.push("/p" + item.keyword)} className="dropdown-item">{item.name}</span>
                                        </li>
                                    )
                                })}
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
                                {womenMenu.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <span onClick={() => history.push("/p" + item.keyword)} className="dropdown-item">{item.name}</span>
                                        </li>
                                    )
                                })}
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
                        {!user && <button className="py-1 px-2 rounded btn-login text-capitalize shadow-none h-25" onClick={() => setModal?.(true)}>login</button>}
                        {user &&
                            <>
                                <li className="nav-item dropdown">
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
                                            <span onClick={() => logout()} className="dropdown-item">Logout</span>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link">
                                        <i className="fas fa-shopping-cart mx-2"></i>Cart
                                    </span>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
