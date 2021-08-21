import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'

import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

import { menu, filter } from '../assets/interfaces'

import { sortBy, Brands, Colors } from '../assets/constants'

const ProductList = () => {

    const history = useHistory();
    const { search, pathname } = useLocation();
    const searchParams = new URLSearchParams(search);

    const [sortby, setSortby] = useState<string>("Latest")
    const [brands, setBrands] = useState<filter[]>([])
    const [colors, setColors] = useState<filter[]>([])

    const addQuery = (key: string, value: string) => {
        let path = pathname;
        let searchString: string = "";

        if (key === "sort") {
            // sort products
            searchParams.set(key, value);
            if (value === "") {
                searchParams.delete("sort")
            }
            searchString = searchParams.toString()
        } else {
            // filter products
            if (!Object.values(Array.from(searchParams.values())).includes(value)) {
                searchParams.append(key, value);
                searchString = searchParams.toString()
            } else {
                let queries: string[] = searchParams.toString().split("&")
                queries.splice(queries.findIndex(element => element === key + "=" + value), 1);
                searchString = queries.join("&");
            }
        }

        history.push({
            pathname: path,
            search: searchString
        });

    };

    const applySort = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sort: menu = sortBy.find(x => x.name === event.target.value)!
        setSortby(sort?.name)
        addQuery("sort", sort?.keyword)
    }

    const filterProducts = (event: React.ChangeEvent<HTMLInputElement>, category: string) => {
        if (category === "vendor") {
            const itemToUpdate: filter = brands.find(item => item.value === event.target.value)!;
            itemToUpdate.checked = !itemToUpdate.checked;
            setBrands(brands)
            addQuery(category, itemToUpdate.value)
        } if (category === "color") {
            const itemToUpdate: filter = colors.find(item => item.value === event.target.value)!;
            itemToUpdate.checked = !itemToUpdate.checked;
            setColors(colors)
            addQuery(category, itemToUpdate.value)
        }
    }

    useEffect(() => {
        let checked: string[] = searchParams.toString().split("&")
        let tempBrand = [...Brands]
        let tempColor = [...Colors]
        checked.forEach((item) => {
            if (item.split("=")[0] === "vendor") {
                tempBrand.forEach((brand) => {
                    if (item.split("=")[1] === brand.value)
                        brand.checked = true
                })
            } if (item.split("=")[0] === "color") {
                tempColor.forEach((color) => {
                    if (item.split("=")[1] === color.value)
                        color.checked = true
                })
            }
        })
        setBrands(tempBrand)
        setColors(tempColor)
    }, [search])

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
                                        <div key={index} className="form-check">
                                            <input className="form-check-input" checked={item.checked} value={item.value} onChange={(e) => filterProducts(e, "vendor")} type="checkbox" />
                                            <label className="text-capitalize">{item.value}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="py-1">
                                <div className="fs-6 fw-bold py-1">Color</div>
                                {colors.map((item, index) => {
                                    return (
                                        <div key={index} className="form-check">
                                            <input className="form-check-input" checked={item.checked} value={item.value} onChange={(e) => filterProducts(e, "color")} type="checkbox" />
                                            <label className="text-capitalize">{item.value}</label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Products />
                </div >
            </div >
            <Footer />
        </>
    )
}

export default ProductList
