import './App.css';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import ProductList from './Components/ProductList';

function App() {

  const [formNewProduct, setFormNewProduct] = useState(false);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getAllProducts = () => {
      fetch('http://localhost:8080/api/product/all')
      .then(res => res.json())
      .then(res => {
          setProducts(res);
      })
      .catch(res => console.log(res))
  }
    getAllProducts()
  }, [])

  useEffect(()=>{

  },[formNewProduct, product, products])

  return (
    <div className="App">
      {
      formNewProduct? 
        <Form product={product} formNewProduct={formNewProduct}/> 
      : 
        <ProductList product={product} setProduct={setProduct} products={products} setFormNewProduct={setFormNewProduct}/>
      }
    </div>
  );
}

export default App;
