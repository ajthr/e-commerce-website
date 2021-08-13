import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { product } from '../assets/interfaces'

import { sortBy } from '../assets/constants'
import { Products, Brands, Colors } from '../assets/Products'

const ProductList = () => {

    const [products, setProducts] = useState<product[]>([])
    const [brands, setBrands] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])

    useEffect(() => {
        setBrands(Brands)
        setColors(Colors)
        setProducts(Products)
    }, [])

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
                                    {sortBy.map((item) => {
                                        return (
                                            <option value={item}>{item}</option>
                                        )
                                    })}
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
                                {brands.map((item) => {
                                    return (
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label">
                                                {item}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="py-1">
                                <div className="fs-6 fw-bold py-1">Color</div>
                                {colors.map((item) => {
                                    return (
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label">
                                                {item}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                        <div className="row p-2">
                            {products.map((product) => (
                                <div className="col-xl-3 col-lg-3 col-md-4">
                                    <img className="card-img-top" src={product.images[0]} alt="product" />
                                    <div className="p-2">
                                        <div className="fs-5 fw-bold text-uppercase">{product.vendor}</div>
                                        <div className="fs-6 fw-normal text-capitalize">{product.name}</div>
                                        <div className="fs-6 fw-bold my-1 mr-2">
                                            <span>${product.price}</span>
                                            <span className="text-decoration-line-through mx-2">${product.msrp}</span></div>
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
