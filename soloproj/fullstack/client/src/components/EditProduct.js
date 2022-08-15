import React from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./Header.css";


// Form for adding a new product
// useparams is for: anything in url we can take from useparams
// useEffect is to update the dom in real time -/ to apply an effect to dom, api calls
const EditSolo = () => {
    const [flavor, setFlavor] = useState('');
    const [wings, setWings] = useState('');
    const [drink, setDrink] = useState('');
    const { id } = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/solo/${id}`)
            .then((res) => {
                console.log(res.data);
                setFlavor(res.data.flavor);
                setWings(res.data.wings);
                setDrink(res.data.drink);
            })
            .catch((err) => console.log('Get Prod by id err', err));
    }, []);


    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/solo/${id}`, {
            flavor,
            wings,
            drink,
        })
        .then((res) => {
        console.log(res.data);
        Navigate('/');
        })
        .catch((err) => console.log('POST ERROR', err));
    };

    // e is event , target is looking for specific item in the dom ( looking for value of title)


    return (

    
        <form onSubmit={handleSubmit}>
        <div className='containerz'>
            <h1> -------------------------------------------------------------</h1>
            <div>
            <label>Flavor</label>
            <input type="text" value={flavor} onChange={(e)=> setFlavor(e.target.value)} />
            </div>

            <div>
            <label>Amount of Wings</label>
            <input type="text" value={wings} onChange={(e)=> setWings(e.target.value)} />
            </div>

            <div>
            <label>Beverage</label>
            <input type="text" value={drink} onChange={(e)=> setDrink(e.target.value)} />
            </div>

            <div>
            <button className='ye'> Update </button>
            </div>

        </div>
        </form>

    )
}

export default EditSolo