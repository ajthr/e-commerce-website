import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { props, product } from '../assets/interfaces'

import { sortBy } from '../assets/constants'
import { Brands, Colors } from '../assets/Products'

const ProductList = (props: props) => {

    const [products, setProducts] = useState<product[]>([])
    const [brands, setBrands] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])

    const filterProducts = (category: string, value: string) => {
        // todo
    }

    useEffect(() => {
        axios.get("http://localhost/api/products" + props.location.search)
        .then((res) => {
            setProducts(res.data)
        })
        setBrands(Brands)
        setColors(Colors)
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
                                    {sortBy.map((item, index) => {
                                        return (
                                            <option value={item} key={index} >{item}</option>
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
                                {brands.map((item, index) => {
                                    return (
                                        <div className="form-check" key={index} onClick={() => filterProducts("vendor", item)}>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-capitalize">
                                                {item}
                                            </label>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="py-1">
                                <div className="fs-6 fw-bold py-1">Color</div>
                                {colors.map((item, index) => {
                                    return (
                                        <div className="form-check" key={index} onClick={() => filterProducts("color", item)}>
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label text-capitalize">
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
                            {products.map((product, index) => (
                                <div className="col-xl-3 col-lg-3 col-md-4 cursor-pointer" key={index} onClick={() => props.history.push("/p/" + product._id)}>
                                    <img className="card-img-top" src={product.images[0]} alt="product" />
                                    <div className="p-2">
                                        <div className="fs-5 fw-bold text-uppercase">{product.vendor}</div>
                                        <div className="fs-6 fw-normal text-capitalize">{product.shortname}</div>
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
