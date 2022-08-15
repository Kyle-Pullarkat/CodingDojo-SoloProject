import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';
import "./Cart.css";


// list of all products
// link for viewing the product
// axios is for api calls / ajax req (node,react,nodejs,public apis,javaspring,python,flask,http requests)

const OrderDetails = () => {
    const [Solos, setSolos] = useState([])

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
            setSolos(res.data);
        }).catch((err) => console.log(err));
    }, []);

    // new func for deleting
    const deleteSolo = (soloId)=>{
        axios
            .delete(`http://localhost:8000/api/solo/${soloId}`)
            .then((res) => {
                const newSolos = Solos.filter((solo) => solo._id !== soloId);
                setSolos(newSolos);

            }).catch((err) => console.log(err));

    }

    const deleteAll = ()=>{
        axios
        .delete(`http://localhost:8000/api/solo/`)
                .then((res) => {
                    Navigate('/');
//            const newProducts = Products.filter((product) => product._id !== productId);
//            setProduct(newProducts);

        }).catch((err) => console.log(err));

    }


    return (



    <div className='container'>
        <h1>Hot Wings </h1>

        <p> Thank you for ordering</p>
        <p> Estimated Ready Time: 30 Minutes</p>
        <h3> Order Details </h3>
        {Solos.map((solo) => (
            <div className='prod' key={solo._id}>
                {solo.wings}<a> Piece </a>
                <a> {solo.flavor} <a> Wings </a> </a>
                <span> | </span>
                <a> ${solo.wings * 2}</a>
            </div>

            
        ))}



<button className='btn btn-info' onClick={()=> deleteAll(Solos._id)}>Start a New Order</button>

        <div></div>
        <h2>Total: ${total}</h2>
    </div>


    );
};

export default OrderDetails