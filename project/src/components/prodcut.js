import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'react-loading-skeleton/dist/skeleton.css';
const Product = ({data}) => {
    return (
        <div>
            <div className='MainCard'>
                <div className='imageContainer'>
                <Link to={`/shop/${data.id}`}>
                    <img src={data.image || <Skeleton/>} alt='productImgae' />
                </Link>
                </div>
                <div>
                <Link to={`/shop/${data.id}`}>
                     <h1>{data.title.slice(0 , 12) || <Skeleton/>}</h1>
                </Link>
                </div>

                <div>
                    <span className='price'>${data.price || <Skeleton count={10} />}</span>
                    <button className='button'>Add to Cart</button>
                </div>


            </div>
        </div>
    );
};

export default Product;