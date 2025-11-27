import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const productList = [
        {id: 1, name: 'Banana'},
        {id: 2, name: 'Maça'},
        {id: 3, name: 'Abacate'},
        {id: 4, name: 'Espinafre'},
        {id: 5, name: 'Cenoura'}
    ];
    return (
        <div>
            <h1>Products</h1>
            <ul>
                {productList.map(product => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}/${product.name}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;