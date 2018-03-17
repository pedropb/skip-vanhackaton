import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        Route status (this will be removed in production, it's here just to make it easy to explore all routes)
    <ul>
            <li>
                <Link to="/">/</Link>
            </li>
            <li>
                <Link to="/login">/login (Done)</Link>
            </li>
            <li>
                <Link to="/logout">/logout (Not implemented)</Link>
            </li>
            <li>
                <Link to="/cart">/cart (static content)</Link>
            </li>
            <li>
                <Link to="/stores">/stores (Done)</Link>
            </li>
            <li>
                <Link to="/store/1">/store/:storeId (not implemented)</Link>
            </li>
            <li>
                <Link to="/products/1">/products/:storeId (static content with dynamic filter)</Link>
            </li>
            <li>
                <Link to="/product/1">/product/:productId (static content)</Link>
            </li>
            <li>
                <Link to="/orders">/orders (not implemented)</Link>
            </li>
            <li>
                <Link to="/order/1">/order/:orderId (not implemented)</Link>
            </li>
        </ul>
    </div>
)

export default Navbar;