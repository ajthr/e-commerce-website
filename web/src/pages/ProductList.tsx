import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProductList = () => {
    return (
        <>
            <Navbar />
            <div className="mx-5 my-10">
                <div className="row py-2 border-bottom">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                        <span className="fs-5 fw-bold">Filters</span>
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                        <div className="d-flex flex-wrap justify-content-end align-items-center">
                            <div className="">
                                <select className="form-select shadow-none">
                                    <option value="1">Latest</option>
                                    <option value="1">Price: High to Low</option>
                                    <option value="1">Price: Low to High</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-2">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 border-end">
                        <div className="">
                            <div className="py-1">
                                <div className="fs-6 fw-bold py-1">Brands</div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Nike
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Adidas
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Puma
                                    </label>
                                </div>
                            </div>
                            <div className="py-1">
                                <div className="fs-6 fw-bold py-1">Color</div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Black
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        White
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label">
                                        Red
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                        <div className="row p-2">
                            {[
                                ...Array(18),
                            ].map((value: undefined, index: number) => (
                                <div className="col-xl-3 col-lg-3 col-md-4">
                                    <img className="card-img-top" src="https://source.unsplash.com/fUEP0djb1hA" alt="product" />
                                    <div className="p-2">
                                        <div className="fs-5 fw-bold text-uppercase">adidas</div>
                                        <div className="fs-6 fw-normal text-capitalize">men galaxy 5 new series</div>
                                        <div className="fs-6 fw-bold my-1 mr-2"><span>$ 80</span><span className="text-decoration-line-through mx-2">$ 89</span></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div >
                </div >
            </div >
            <Footer />
        </>
    )
}

export default ProductList
