import React , {useContext} from 'react';
import { DataContext } from '../context/productContextProvider';
const ProductDetail = (props) => {
    const products = useContext(DataContext);
    const id = props.match.params.id ;
    const ShowProducts = products[id -1];
    return (
        <div>
            <img loading="lazy" src={ShowProducts.image} />
           <h1>{ShowProducts.title}</h1>
           <h1>{ShowProducts.category}</h1>
           <h1>{ShowProducts.price}</h1>
           <h1>{ShowProducts.rating.rate}</h1>
           <h1>{ShowProducts.description}</h1>
           <h1>{ShowProducts.title}</h1>

        </div>
    );
};

export default ProductDetail;