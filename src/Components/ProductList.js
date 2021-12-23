import React from 'react';

const ProductList = ({setProduct,  products, setFormNewProduct}) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        };
        fetch('http://localhost:8080/api/product/'+id, requestInit)
        .then(res => setFormNewProduct(false))
        .catch(res => console.log(res))
    }

    let catchProduct = (product) => {

        fetch('http://localhost:8080/api/product/'+ product)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setProduct(res);
            setFormNewProduct(true);
        })
        .catch(res => console.log(res))
    }

    return(
        <>
        <button onClick={()=>setFormNewProduct(true)}>Crear Nuevo Producto</button>
        <table className="table">
                <thead>
                    <tr>
                        <th>REFERENCIA</th>
                        <th>MARCA</th>
                        <th>CATEGORIA</th>
                        <th>NOMBRE</th>
                        <th>DESCRIPCION</th>
                        <th>DISPONIBILIDAD</th>
                        <th>PRECIO</th>
                        <th>CANTIDAD</th>
                        <th>FOTOGRAFIA</th>
                    </tr>
                </thead>
                <tbody>
                    {products?.map(product => (
                        <tr key={product.reference}>
                            <td>{product.reference}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.nombre}</td>
                            <td>{product.description}</td>
                            <td>{product.availability}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.photography}</td>
                            <td>
                            <div className="mb-1">
                                <button onClick={() => handleDelete(product.reference)} className="btn btn-danger">Borrar</button>
                            </div>
                            <div className="mb-1">
                                <button onClick={() => catchProduct(product.reference)} className="btn btn-green">Editar</button>
                            </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </>
    );
}
export default ProductList;

