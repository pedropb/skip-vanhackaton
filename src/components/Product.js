import React from 'react';

const Product = ({ match }) => <div>Product {match.params.productId}</div>;

export default Product;