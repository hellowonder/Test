import React from 'react'
import { useState } from 'react'
import './SearchBar.css'


export default function SearchBar() {
    //const Navigate = useNavigate();
    const [product, SetProduct] = useState();

    const findProduct = (event) => {
        SetProduct(event.target.value);
    }

    // const productFind = () => {
    //     axios.post('', {
    //         product: product
    //     })
    //         .then((result) => {
    //             Navigate('/');
    //         }).catch((error) => {
    //             alert("Sorry Product not available");
    //         })
    // }

    return (
        <div>
            <input type="text" placeholder='Search Product' onChange={findProduct} />
            <input type="button" value="Submit" className='SearchButton' />
            <h1>{product}</h1>
        </div>
    )
}
