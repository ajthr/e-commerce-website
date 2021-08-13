import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <img className="w-100" src="https://source.unsplash.com/jLEGurepDco/1600x800" alt="header" />
            <section>
                <div className="row shadow m-5">
                    <div className="col-lg-3 col-md-6 col-sm-6 p-4">
                        <div className="d-flex justify-content-center my-2">
                            <i className="fas fa-truck fs-3"></i>
                        </div>
                        <div className="fs-5 fw-bold d-flex justify-content-center my-2">Fast Delivery</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-4">
                        <div className="d-flex justify-content-center my-2">
                            <i className="fas fa-random fs-3"></i>
                        </div>
                        <div className="fs-5 fw-bold d-flex justify-content-center my-2">Return Policy</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-4">

                        <div className="d-flex justify-content-center my-2">
                            <i className="fas fa-headphones fs-3"></i>
                        </div>
                        <div className="fs-5 fw-bold d-flex justify-content-center my-2">24/7 Support</div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 p-4">

                        <div className="d-flex justify-content-center my-2">
                            <i className="fas fa-database fs-3"></i>
                        </div>
                        <div className="fs-5 fw-bold d-flex justify-content-center my-2">Secure Payment</div>
                    </div>
                </div >
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold">Categories To Bag</span>
                <div className="m-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/XZ3EmAIWuz0" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Sneakers</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/XZ3EmAIWuz0" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Casuals</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/XZ3EmAIWuz0" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Boots</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/XZ3EmAIWuz0" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Sports</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold">Latest Arrivals</span>
                <div className="m-5">
                    <div className="row">
                        {[
                            ...Array(4),
                        ].map((value: undefined, index: number) => (
                            <div className="col-md-6 col-lg-3 col-xl-3 my-3">
                                <img className="w-100" src="https://source.unsplash.com/JM-qKEd1GMI" alt="shoe" />
                                <div className="m-2">
                                    <div className="fs-5 fw-bold text-uppercase">adidas</div>
                                    <div className="fs-6 fw-normal text-capitalize">men galaxy 5 new series</div>
                                    <div className="fs-6 fw-bold my-1 mr-2"><span>$ 80</span><span className="text-decoration-line-through mx-2">$ 89</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold text-capitalize">Explore Top Brands</span>
                <div className="m-5">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/SzVXG6FFh0Q" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Nike</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/SzVXG6FFh0Q" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Adidas</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/SzVXG6FFh0Q" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Roadster</div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1">
                            <img className="w-100" src="https://source.unsplash.com/SzVXG6FFh0Q" alt="shoe" />
                            <div className="m-2">
                                <div className="fs-6 text-uppercase text-center">Puma</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}

export default Home
