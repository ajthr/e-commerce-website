import React, { useEffect, useState } from 'react'

import axios from 'axios'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { props, brand, category, product } from '../assets/interfaces'

import { heroImage, features } from '../assets/constants'
import { CategoriesToBag, TopBrands } from '../assets/Products'

const Home = (props: props) => {

    const [categoriesToBag, setCategoriesToBag] = useState<category[]>([])
    const [latestArrivals, setLatestArrivals] = useState<product[]>([])
    const [topBrands, setTopBrands] = useState<brand[]>([])

    useEffect(() => {
        axios.get("http://localhost/api/products/latest?limit=4")
            .then((res) => {
                setLatestArrivals(res.data)
            })
        setCategoriesToBag(CategoriesToBag)
        setTopBrands(TopBrands)
    }, [])

    return (
        <div>
            <Navbar />
            <img className="w-100" src={heroImage} alt="header" />
            <section>
                <div className="row shadow m-5">
                    {features.map((feature, index) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-sm-6 p-4" key={index} >
                                <div className="d-flex justify-content-center my-2">
                                    <i className={feature.class}></i>
                                </div>
                                <div className="fs-5 fw-bold d-flex justify-content-center my-2">{feature.feature}</div>
                            </div>
                        )
                    })}
                </div >
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold">Categories To Bag</span>
                <div className="m-5">
                    <div className="row">
                        {categoriesToBag.map((category, index) => {
                            return (
                                <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1" key={index} onClick={() => { props.history.push("/p?category=" + category.name) }}>
                                    <img className="w-100" src={category.image} alt="shoe" />
                                    <div className="m-2">
                                        <div className="fs-6 text-uppercase text-center">{category.name}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold">Latest Arrivals</span>
                <div className="m-5">
                    <div className="row">
                        {latestArrivals.map((product, index) => {
                            return (
                                <div className="col-md-6 col-lg-3 col-xl-3 my-3 text-center" key={index} onClick={() => props.history.push("/p/" + product._id)}>
                                    <img className="image-list" src={product.images[0]} alt="shoe" />
                                    <div className="m-2">
                                        <div className="fs-5 fw-bold text-uppercase">{product.vendor}</div>
                                        <div className="fs-6 fw-normal text-capitalize">{product.shortname}</div>
                                        <div className="fs-6 fw-bold my-1 mr-2"><span>${product.price}</span><span className="text-decoration-line-through mx-2">${product.msrp}</span></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className="my-4">
                <span className="mx-5 fs-4 fw-bold text-capitalize">Explore Top Brands</span>
                <div className="m-5">
                    <div className="row">
                        {topBrands.map((brand, index) => {
                            return (
                                <div className="col-md-6 col-lg-3 col-xl-3 my-3 p-1 text-center" key={index} onClick={() => { props.history.push("/p?vendor=" + brand.name) }}>
                                    <img className="brand-image" src={brand.image} alt="shoe" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    )
}

export default Home
