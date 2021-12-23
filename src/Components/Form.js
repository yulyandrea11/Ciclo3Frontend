import React from 'react';
import './form.css';


const Form = ({product, formNewProduct}) => {

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const productData = {
            reference: e.target.elements.product_reference.value,
            brand: e.target.elements.product_brand.value,
            category: e.target.elements.product_category.value,
            nombre: e.target.elements.product_name.value,
            description: e.target.elements.product_description.value,
            price: parseFloat(e.target.elements.product_price.value),
            quantity: parseFloat(e.target.elements.product_quantity.value),
            photography: null
        };

        const requestPost = {url: "http://localhost:8080/api/product/new", method: "POST"};
        const requestPut = {url: "http://localhost:8080/api/product/update", method: "PUT"};
        const request = product === null?  requestPost : requestPut;

        const requestFetch = await fetch(request.url, {
            method: request.method,
            headers:{
                "Content-type" : "application/json",
            },
            body: JSON.stringify(productData)
        });

        console.log(await requestFetch);
    }

    function fillValue(property){
        return product !== null? product[property] : ""
    }

  return (
    <form onSubmit={handleSubmit} id="product_form">
        <label htmlFor='product_reference'>Reference</label>
        <input type="text" id="product_reference" name="product_reference" className='input_product' defaultValue={fillValue("reference")}/>
        <label htmlFor='product_brand'>Marca</label>
        <input type="text" id="product_brand" name="product_brand" className='input_product' defaultValue={fillValue("brand")}/>
        <label htmlFor='product_category'>Categoria</label>
        <input type="text" id="product_category" name="product_category" className='input_product' defaultValue={fillValue("category")}/>
        <label htmlFor='product_name'>Nombre</label>
        <input type="text" id="product_name" name="product_name" className='input_product' defaultValue={fillValue("nombre")}/>
        <label htmlFor='product_description'>Descripcion</label>
        <input type="text" id="product_description" name="product_description" className='input_product' defaultValue={fillValue("description")}/>
        <label htmlFor='product_price'>Precio</label>
        <input type="number" id="product_price" name="product_price" className='input_product' defaultValue={fillValue("price")}/>
        <label htmlFor='product_quantity'>Cantidad</label>
        <input type="number" id="product_quantity" name="product_quantity" className='input_product' defaultValue={fillValue("quantity")}/>
        <button type='submit' form='product_form'>Crear</button>
    </form>
  );
}

export default Form;
