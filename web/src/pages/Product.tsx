import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { props, product } from '../assets/interfaces'
import { scrollContainerLeft, scrollContainerRight } from '../assets/animations'

const Product = (props: props) => {

    const [singleProduct, setSingleProduct] = useState<product>()
    const [similarProduct, setSimilarProduct] = useState<product[]>([])
    const [imageIndex, setImageIndex] = useState<number>(0)

    useEffect(() => {
        let { id }: any = props.match.params;
        axios.get("http://localhost/api/products/p/" + id)
            .then((res) => {
                setSingleProduct(res.data)
            })
        axios.get("http://localhost/api/products/similar?id=" + id + "&limit=4")
            .then((res) => {
                setSimilarProduct(res.data)
            })

    }, [])

    return (
        <>
            <Navbar />
            <section className="container-fluid my-5">
                <div className="d-flex justify-content-center">
                    <div className="p-2">
                        <div className="row">
                            <div className="col-md-6 position-relative">
                                <div className="row images p-3">
                                    <div className="text-center p-4 image-scroll hide-scrollbar" id='image-container'>
                                        {singleProduct?.images.map((image, index) => {
                                            return (
                                                <img className={imageIndex === index ? `active-image m-1` : `inactive-image m-1`} src={image} alt="product" onClick={() => setImageIndex(index)} />
                                            )
                                        })}
                                        <i className="fas fa-chevron-left cursor-pointer position-absolute fs-4 scroll-btn left-middle" onClick={() => scrollContainerLeft('image-container')}></i>
                                        <i className="fas fa-chevron-right cursor-pointer position-absolute fs-4 scroll-btn right-middle" onClick={() => scrollContainerRight('image-container')}></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product p-4">
                                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{singleProduct?.vendor}</span>
                                        <h5 className="text-uppercase">{singleProduct?.name}</h5>
                                        <div className="price d-flex flex-row align-items-center"> <span className="act-price">${singleProduct?.price}</span>
                                            <div className="ml-2"> <span className="text-decoration-line-through mx-2">${singleProduct?.msrp}</span></div>
                                        </div>
                                    </div>
                                    <p className="about">{singleProduct?.description}</p>
                                    <div className="sizes mt-5">
                                        <h6 className="text-uppercase">Size</h6>
                                        <label className="radio mx-1">
                                            <input type="radio" name="size" value="6" />
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
                        {similarProduct.map((product) => (
                            <div className="col-md-6 col-lg-3 col-xl-3 my-3">
                                <img className="image-list" src={product.images[0]} alt="shoe" />
                                <div className="m-2">
                                    <div className="fs-5 fw-bold text-uppercase">{product.vendor}</div>
                                    <div className="fs-6 fw-normal text-capitalize">{product.shortname}</div>
                                    <div className="fs-6 fw-bold my-1 mr-2">
                                        <span>${product.price}</span>
                                        <span className="text-decoration-line-through mx-2">${product.msrp}</span>
                                    </div>
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
