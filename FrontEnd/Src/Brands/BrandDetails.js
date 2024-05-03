import { React, useState } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import './Brands.css';
import BrandModal from './BrandModal';

const { Meta } = Card;

const BrandDetails = ({ brands, setBrands }) => {

    const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
    const [newBrand,setNewBrand]=useState({brandName:" ",imageUrl:" "});

    console.log("----Brands-2----", brands);

    const showBrandModal = () => {
        setIsBrandModalOpen(true);
    };

    const handleBrandCancel = () => {
        setIsBrandModalOpen(false);
    };

    const handleBrandOk = () => {
        if (!newBrand.brandName || !newBrand.imageUrl) {
            console.error('Brand name and image URL are required');
            return;
        }

        fetch('http://localhost:3001/api/brands', {
            method: 'POST',
            body: JSON.stringify(newBrand),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('New brand added:', data);
            setIsBrandModalOpen(false);
            setNewBrand({brandName:" ",imageUrl:" "});
        })
        .catch((error) => {
            console.error('Error adding brand:', error);
            setIsBrandModalOpen(false);
            setNewBrand({brandName:" ",imageUrl:" "});
        });
    };

    const renderProductCards = () => {
        return brands.map((brand, index) => (
            <Link to={`/brand/${brand.ID}`} key={index}>
                <Card key={index} hoverable style={{ width: 240 }} className="brand-card">
                    <img src={brand.imageUrl} alt='brandImage' className="brand-image" />
                    <Meta title={brand.brandName} />
                </Card>
            </Link>

        ));
    };

    return (
        <div>
            <div className="brands-container">
                <h1 className="title">Mobile Brands</h1>
                <div className='Brand-Add'>
                    <Button type="primary"
                        onClick={showBrandModal}
                    >Add Products</Button>
                </div>
                <div className="brand-cards">
                    {renderProductCards()}
                </div>
            </div>
            <BrandModal
                isBrandModalOpen={isBrandModalOpen}
                handleBrandCancel={handleBrandCancel}
                handleBrandOk={handleBrandOk}
                newBrand={newBrand}
                setNewBrand={setNewBrand}
            />
        </div>
    );
};

export default BrandDetails;