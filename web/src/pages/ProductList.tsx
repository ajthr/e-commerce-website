import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import axios from 'axios'

import Navbar from '../components/Navbar'
import Loader from '../components/Loader'
import Footer from '../components/Footer'

import { product, menu } from '../assets/interfaces'

import { baseUri, sortBy } from '../assets/constants'
import { Brands, Colors } from '../assets/Products'

const ProductList = () => {

    const history = useHistory();
    const { search, pathname } = useLocation();

    const [sortby, setSortby] = useState<string>("Latest")
    const [products, setProducts] = useState<product[]>([])
    const [brands, setBrands] = useState<string[]>([])
    const [colors, setColors] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const addQuery = (key: string, value: string) => {
        let path = pathname;
        let searchParams = new URLSearchParams(search);
        searchParams.set(key, value);
        if (value === "") {
            searchParams.delete("sort")
        }
        history.push({
            pathname: path,
            search: searchParams.toString()
        });
    };

    const applySort = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sort: menu = sortBy.find(x => x.name === event.target.value)!
        setSortby(sort?.name)
        addQuery("sort", sort?.keyword)
    }

    const filterProducts = (category: string, value: string) => {
        // todo
    }

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
        setBrands(Brands)
        setColors(Colors)
    }, [search])

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            {!loading &&
                <>
                    <div className="mx-5 my-10">
                        <div className="row py-2 border-bottom">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                <span className="fs-5 fw-bold">Filters</span>
                            </div>
                            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7">
                                <div className="d-flex flex-wrap justify-content-end align-items-center">
                                    <div className="">
                                        <select className="form-select shadow-none" onChange={(e) => applySort(e)} value={sortby}>
                                            {sortBy.map((item, index) => {
                                                return (
                                                    <option key={index} value={item.name}>{item.name}</option>
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
                            </div >
                        </div >
                    </div >
                    <Footer />
                </>
            }
        </>
    )
}

export default ProductList
