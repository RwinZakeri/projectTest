import React from 'react';
import {Switch , Route , Link , Redirect} from 'react-router-dom';
import Home from './components/home';
import ProductContextProvider from './context/productContextProvider';
import Products from './components/products';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ProductDetail from './components/productDetail';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
    <Navbar/>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ProductContextProvider>
      <Switch>
        <Route path='/shop/:id' component={ProductDetail} />
        <Route path='/shop' component={Products} />
        <Route path='/' component={Home} />
        <Redirect to='/shop' />
      </Switch>
      </ProductContextProvider>
    </SkeletonTheme>
    </div>
  );
};

export default App;