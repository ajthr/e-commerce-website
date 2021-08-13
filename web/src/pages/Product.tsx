import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Product = () => {
    return (
        <>
            <Navbar />
            <section className="container-fluid my-5">
                <div className="d-flex justify-content-center">
                        <div className="p-2">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row images p-3">
                                        <div className="text-center p-4">
                                            <img className="col-12" src="https://source.unsplash.com/164_6wVEHfI" alt="product" />
                                        </div>
                                        <div className="text-center"> 
                                            <img className="col-3 mx-1" src="https://source.unsplash.com/JM-qKEd1GMI" alt="product" />
                                            <img className="col-3 mx-1" src="https://source.unsplash.com/fUEP0djb1hA" alt="product" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Puma</span>
                                            <h5 className="text-uppercase">Men Leather Sneakers</h5>
                                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">$20</span>
                                                <div className="ml-2"> <span className="text-decoration-line-through mx-2">$59</span></div>
                                            </div>
                                        </div>
                                        <p className="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum beatae, sequi perspiciatis molestiae, commodi et, eaque ipsa quidem veritatis quisquam accusamus! Sequi exercitationem placeat qui, nulla tempora culpa asperiores quod.</p>
                                        <div className="sizes mt-5">
                                            <h6 className="text-uppercase">Size</h6>
                                            <label className="radio mx-1">
                                                <input type="radio" name="size" value="6" checked />
                                                <span>6</span>
                                            </label>
                                            <label className="radio mx-1">
                                                <input type="radio" name="size" value="7" />
                                                <span>7</span>
                                            </label>
                                            <label className="radio mx-1">
                                                <input type="radio" name="size" value="8" />
                                                <span>8</span>
                                            </label>
                                            <label className="radio mx-1">
                                                <input type="radio" name="size" value="9" />
                                                <span>9</span>
                                            </label>
                                            <label className="radio mx-1">
                                                <input type="radio" name="size" value="10" />
                                                <span>10</span>
                                            </label>
                                        </div>
                                        <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold">Similar products</span>
                <div className="m-5">
                    <div className="row">
                        {[
                            ...Array(8),
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
            <Footer />
        </>
    )
}

export default Product
