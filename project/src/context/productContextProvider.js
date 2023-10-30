import React, { useState } from 'react';
import GetData from '../services/api.ts';

// Context
export const DataContext = React.createContext();

const ProductContextProvider = ({children}) => {
    const [data , setData] = useState([]);
    // const [isLoading , setIsLoading] = useState(true);
    useState(()=> {

            const FetchData = async ()=> {
                setData(await GetData())
            }
            FetchData();

    },[])
    return (
        <div>
            <DataContext.Provider value={data}>
            {children}
            </DataContext.Provider>
        </div>
    );
};

export default ProductContextProvider;