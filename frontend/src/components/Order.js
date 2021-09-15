import React from 'react'

const Order = () => {
    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col-3">
                    <h2>Orders N°1</h2>
                </div>
                <div className="col-6"></div>
                <div className="col-3">
                    <button>Back</button>
                </div>
            </div>

            <div className="row">

                <div className="col-4">
                    <p>Customer:Joe Smith</p>
                    <p>Status  :Pending</p>
                    <p>Date    :05/02/2021</p>
                </div>
                <div className="col-6"></div>
            </div>

            <div className="row mt-4">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">N°</th>
                            <th scope="col">Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col-9"></div>
                <div className="col-3">
                    <button>Add Item+</button>
                </div>
            </div>

            <div className="row">
                <div className="col-8"></div>
                <div className="col-4">
                    <div className="col-6">
                        <p>Subtotal:            $100</p>
                        <p>Taxes</p>
                        <p>Total City Tax:      $10</p>
                        <p>Total Country Tax:   $5.5</p>
                        <p>Total State Tax:     $9.24</p>
                        <p>Total Federal Tax:   $2.49</p>
                        <p>Total Taxes:         $27.23</p>
                        <p>Total:               $127.23</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-8"></div>
                <div className="col-2">
                    <button>Complete Order</button>
                </div>
                <div className="col-2">
                    <button>Reject Order</button>
                </div>
            </div>

        </div>
    )
}

export default Order
