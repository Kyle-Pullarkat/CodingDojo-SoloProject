import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Cart.css";


// list of all products
// link for viewing the product
// axios is for api calls / ajax req (node,react,nodejs,public apis,javaspring,python,flask,http requests)

const Cart = () => {
    const [Solos, setSolo] = useState([])

    var total = 0;
    var each = 0;
    {Solos.map((solo) => (
        total += solo.wings * 2
        
        ))}

        {Solos.map((solo) => (
            each = solo.wings * 2
            
            ))}


    const Navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/solo').then(res =>{
            console.log(res.data);
            setSolo(res.data);
        }).catch((err) => console.log(err));
    }, []);

    // new func for deleting
    const deleteSolo = (soloId)=>{
        axios
            .delete(`http://localhost:8000/api/solo/${soloId}`)
            .then((res) => {
                const newSolos = Solos.filter((solo) => solo._id !== soloId);
                setSolo(newSolos);

            }).catch((err) => console.log(err));

    }



    return (

 


    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <a class="navbar-brand">Hot Wings</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Menu<span class="sr-only"></span></a>
                    </li>
                </ul>
            </div>

        </nav>


    <div className='containerz'>

        <h3> Your Cart </h3>
        {Solos.map((solo) => (
            <div className='prod' key={solo._id}>
                {solo.wings}<a> Piece </a>
                {solo.flavor} <a> Wings </a>
                <span> | </span>
                <a> ${solo.wings * 2}</a>
                <Link className='btn btn-info' to={`/solo/edit/${solo._id}`}> edit</Link>
                <button className='btn btn-danger' onClick={()=> deleteSolo(solo._id)}>Remove</button>
            </div>

            
        ))}


        <div></div>
        <h2>Total: ${total}</h2>
        <button className='btn btn-primary' onClick={()=> Navigate('/solo/orderdetails')}>Purchase</button>
    </div>

    </div>


    );
};

export default Cart