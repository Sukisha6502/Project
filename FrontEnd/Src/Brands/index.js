import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import BrandDetails from './BrandDetails';
import Home from '../HomePage/Home';
import Footer from '../HomePage/Footer';
import NavBar from '../HomePage/NavBar';


const Index = () => {

    const [brands, setBrands] = useState([]);
    const [copyData, setCopyData] = useState(brands);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {

        fetch('http://localhost:3001/api/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data);
                setCopyData(data);
            })
            .catch(error => console.error('Error fetching brands:', error));
    }, []);

    console.log("----Brands-1----", brands);
    console.log("----CopyData----", copyData);


    const handleSearch = () => {
        console.log("----SearchValue-----", searchValue);
        if (searchValue) {
            const searchedData = brands.filter((brand) =>
                brand.brandName.toLowerCase().includes(searchValue.toLowerCase())
            );

            console.log("------searchedData-----", searchedData);
            if (searchedData.length > 0) {
                setCopyData(searchedData);
                setSearchValue(' ');
            } else {
                message.warning('Please enter a valid brand name');
            }
        }
        else {
            setCopyData(brands);
        }
    };

    return (
        <div>
            <NavBar
                setSearchValue={setSearchValue}
                handleSearch={handleSearch}
            />
            <Home
            />
            <BrandDetails
                brands={copyData}
                setBrands={setBrands}
            />
            <Footer
            />
        </div>
    );
}

export default Index;
