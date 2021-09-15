import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ListOrders = () => {

    useEffect(() => {
        axiosOrders();
    }, []);

    const [Orders, setOrders] = useState([]);

    const axiosOrders = async () => {
        const dataOrders = await axios.get('http://localhost:4000/orders');
        setOrders(dataOrders.data);
    }

    return (
        <div className="container mt-5">

            <div className="row">
                <h2>Orders</h2>
            </div>

            <div className="row">
                <div className="col-9"></div>
                <div className="col-3">
                    <button>Create Order</button>
                </div>
            </div>

            <div className="row mt-4">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Consumer</th>
                            <th scope="col">Status</th>
                            <th scope="col">Date</th>
                            <th scope="col">Total</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Orders.map(
                            i => (
                                <tr key="i._id">
                                    <th scope="row">{i.OrderNumber}</th>
                                    <td>{i.Customer}</td>
                                    <td>{i.Status}</td>
                                    <td>{i.date}</td>
                                    <td>{i.TotalAmount}</td>
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

export default ListOrders
