import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Header.css";


// Form for adding a new product
const Header = () => {
    const [flavor, setFlavor] = useState('');
    const [wings, setWings] = useState('');
    const [drink, setDrink] = useState('');

    const Navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/solo', {
            flavor,
            wings,
            drink,
        })
        .then((res) => {
        console.log(res.data);
        Navigate('/allproducts');
        })
        .catch((err) => console.log('POST ERROR', err));
    };

    // e is event , target is looking for specific item in the dom ( looking for value of title)


    return (

        

        <form onSubmit={handleSubmit}>

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <a class="navbar-brand">Hot Wings</a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/allproducts">Cart<span class="sr-only"></span></a>
    </li>
    </ul>
  </div>

        </nav>
        <div className='containerz'>

            <h1> Hot Wings Menu </h1>



            <h3>Make-A-Bucket</h3>
            <h5>* Wings are 2$ Each, Drinks are Free *</h5>

            <div className='form-group col-md-4'>
            <label>Wing Flavors</label>
            <select type="text" className='form-control' id='flavor' onChange={(e)=> setFlavor(e.target.value)}>
                <option>Choose A Flavor</option>
                <option>Buffalo</option>
                <option>Garlic Parmesan</option>
                <option>BBQ</option>
            </select>
            </div>


                <div className='form-group col-md-4'>
                <label>How Many Wings</label>
                <input type="text" className='form-control' placeholder='Select Amount of wings' id='validationCustomUsername' value={wings} onChange={(e)=> setWings(e.target.value)} required/>
                </div>


            <div className='form-group col-md-4'>
            <label>Beverage</label>
            <select type="text" className='form-control' value={drink} onChange={(e)=> setDrink(e.target.value)} >
                <option>Select a Beverage</option>
                <option>Bottled Water</option>
                <option>Pepsi</option>
                <option>Lemonade</option>
                </select>
            </div>

            <div>
            <button class='btn btn-primary'> Add To Order </button>
            </div>
        </div>
        </form>

    )
}

export default Header

// rafce