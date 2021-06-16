import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";

function AllProducts(props) {
    let initialProducts = [];
    let [pack, setPack] = useState(initialProducts);
    useEffect(() => {
        // const URL = `http://localhost:8080/pack/by/cost`;
        // axios
        //     .get(URL)
        //     .then((response) => {
        //         setPack(response.data);
        //     })
        //     .catch((error) => console.log(error));
        getListOfPack();
    }, []);

    function getListOfPack() {
        const URL = 'http://localhost:8080/pack/by/cost';
        axios.get(URL).then((response) => {
            setPack(response.data);
        })
            .catch((error) => console.log(error));
    }

    function goToAddProduct() {
        props.history.push('/add')
    }

    // function handleDeletePack(id) {
    //     fetch(`http://localhost:8080/pack/delete/by/id/${id}`, {
    //         method: 'DELETE'
    //     }).then((response) => {
    //         response.json().then((result) => {
    //             console.warn(result)
    //             getListOfPack()
    //         })
    //     })
    // }

    return (
        <div>
            <Menu/>
        
        <div>
            <h2 className="text-primary">All Packs</h2>
            <hr />
            {/* <button onClick={goToAddProduct} className="btn btn-danger mt-2 mb-2">
                Add Product
      </button> */}
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Pack id</th>
                        <th>Pack Cost </th>
                        <th>Pack DaysValidity</th>
                        <th>Description</th>
                        <th>PlanName</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {pack.map((pack) => (
                        <tr key={pack.id}>
                            <td>{pack.id}</td>
                            <td>{pack.cost}</td>
                            <td>{pack.daysValidity}</td>
                            <td>{pack.description}</td>
                            <td>{pack.planName}</td>
                            {/* <td>{pack.channels}</td> */}
                            {/* <td> */}
                              {/* <button onClick={() =>UpdatePack(pack.id)} className="btn btn-info">Update</button> */}
                               {/* <button onClick={() => handleDeletePack(pack.id)} className="btn btn-danger m-1">Delete</button> */}
                            {/* </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default AllProducts;