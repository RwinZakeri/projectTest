import React , {useContext, useState} from 'react';
import { DataContext } from '../context/productContextProvider';
import CardSkeleton from '../services/CardSkeleton';
import './ProductCard.css';
import Product from './prodcut';
const Products = () => {
    const product = useContext(DataContext);
    const [search , setSearch] = useState("");

    const filtering = product.map(item => item.title.toLowerCase().includes(search.toLowerCase()));
    console.log(filtering);
    return (
        <>
        <input type='text' value={search} onChange={(e)=> setSearch(e.target.value)} style={{width : 400 , height : 20}} />
        <div className='Cards'>
            {
                 product.length ? product.map(item => <Product key={item.id} data={item} />) : <CardSkeleton/> 
            }
        </div>
        </>
    );
};

export default Products;