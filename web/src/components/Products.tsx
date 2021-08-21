import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import axios from 'axios'

import Loader from '../components/Loader'

import { product } from '../assets/interfaces'

import { baseUri } from '../assets/constants'

const Products = () => {

    const history = useHistory();
    const { search } = useLocation();

    const [products, setProducts] = useState<product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            await axios.get(baseUri + "/api/products/" + search)
                .then((res) => {
                    setProducts(res.data)
                    setLoading(false)
                })
        }
        getProducts()
    }, [search])

    return (
        <>
            {loading && <Loader />}
            {!loading &&
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                    <div className="row p-2">
                        {products.map((product, index) => (
                            <div className="col-xl-3 col-lg-3 col-md-4 cursor-pointer" key={index} onClick={() => history.push("/p/" + product._id)}>
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
                </div>
            }
        </>
    )
}

export default Products
