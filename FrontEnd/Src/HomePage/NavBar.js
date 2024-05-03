import React from 'react';
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
const { Search } = Input;

const NavBar = ({ handleSearch ,setSearchValue}) => {

    const onSearch = (value) => {
        setSearchValue(value);
        handleSearch(value);
    };

    return (
        <div>
            <header>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Search className='SearchBar'
                        placeholder="Search the Product"
                        onSearch={onSearch} 
                        style={{ width: 500 }}
                    />
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
                        <li><a href="/brands">Home</a></li>
                        <li><a href="/brands">Brands</a></li>
                        <li><a href="/addcart"><ShoppingCartOutlined style={{ fontSize: '24px' }} /></a></li>
                    </ul>
                </nav>
            </header>
            <div>
            </div>
        </div>
    );
};

export default NavBar;
