import React,{useState,useEffect} from 'react'
import { Card } from 'antd';
import './AddCart.css';

const { Meta } = Card;

const AddCart = () => {
    const [cartDetails,setCartDetails]=useState([]);
    console.log(cartDetails,"cartDetails");

   useEffect(() => {
        fetch('http://localhost:3001/api/addcart')
            .then(res => res.json())
            .then(data => setCartDetails(data))
            .catch(error => console.error('Error fetching cart items:', error));
    }, []);
    // const image = 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg';

    const renderProductsCards = () => {
        return cartDetails
            .map((product, index) => (
                <Card key={index} hoverable style={{ width: 240, backgroundColor: 'white' }} className="addcart-card">
                    {/* <pre>{product.imageurl}</pre> */}
                    <img src={product.imageurl} alt='productImage' className="addcart-image" />
                    <Meta
                        title={product.modelName}
                        description={
                            <div>
                                <div>Price: {product.price}</div>
                                <div>Count: {product.count}</div>
                            </div>
                        }
                    />
                </Card>
            ));
    };

    return (
        <div>
            <div>
                <header className='addcart-header'>
                    <h1>Products in Add Cart</h1>
                </header>
                <div className="addcart-cards">
                    {renderProductsCards()}
                </div>
            </div>
        </div>
    )
}

export default AddCart