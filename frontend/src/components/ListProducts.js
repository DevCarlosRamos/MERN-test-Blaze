import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const ListProducts = () => {

    useEffect(() => {
        axiosProducts();
    }, []);

    const [Products, setProducts] = useState([]);

    const axiosProducts = async () => {
        const dataProducts = await axios.get('http://localhost:4000/products');
        setProducts(dataProducts.data);
    }

    return (
        <div className="container mt-5">

            <div className="row">
                <h2>Products</h2>
            </div>
            <div className="row">
                <div className="col-9"></div>
                <div className="col-3">
                    <button>
                        <Link to="/Products/add">Create Product</Link>
                    </button>
                </div>
            </div>

            <div className="row mt-4">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Category</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Products.map(
                            i => (
                                <tr key="i._id">
                                    <td>{i.Name}</td>
                                    <td>{i.Category}</td>
                                    <td>${i.UnitPrice}</td>
                                    <td>{i.Active?"Active":"Inactive"}</td>
                                    <td>{i._id}</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>

            <div className="row mt-3">
                <div className="col-8"></div>
                <div className="col-4">
                    <div className="btn-group" role="group" >
                        <button type="button" className="btn btn-outline-primary">Previous</button>
                        <button type="button" className="btn btn-outline-primary">1</button>
                        <button type="button" className="btn btn-outline-primary">2</button>
                        <button type="button" className="btn btn-outline-primary">3</button>
                        <button type="button" className="btn btn-outline-primary">Next</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProducts
