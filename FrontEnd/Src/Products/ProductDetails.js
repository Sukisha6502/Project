import React, { useState, useEffect } from 'react';
import { Card, Button, message } from 'antd';
import { ShoppingCartOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import './Products.css';
import ProductModal from './ProductModal';
import AddCartModal from './AddCartModal';


const { Meta } = Card;

const ProductDetails = () => {
    const [products, setProducts] = useState([]);
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [newProduct, setNewProduct] = useState({ modelName: ' ', price: ' ', imageUrl: ' ', count: ' ' });
    const [likedProducts, setLikedProducts] = useState([]);
    const [isAddCartModalOpen, setIsAddCartModalOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState('');
    const [addToCart, setAddToCart] = useState({ modelName: ' ', price: ' ', imageUrl: ' ', count: ' ' });
    const { ID } = useParams();

    // console.log('templatestring', `http://localhost:3001/api/appleproducts?brandId=${ID}`);
    // console.log('templatestring1', `http://localhost:3001/api/appleproducts?brandId=ID`);
    useEffect(() => {
        fetch(`http://localhost:3001/api/appleproducts?brandId=${ID}`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        if (addToCart.brandId && addToCart.modelName && addToCart.price && addToCart.imageUrl && addToCart.count) {
            fetch('http://localhost:3001/api/addcart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(addToCart)
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add product to cart');
                }
                return response.json();
            })
            .then(data => {
                console.log('Product added to cart:', data);
            })
            .catch(error => {
                console.error('Error adding product to cart:', error);
            });
        }
    }, [addToCart]);


    console.log("---products-1-----", products);
    console.log("----ID----", ID);

    const showProductModal = () => {
        setIsProductModalOpen(true);
    };

    const handleProductCancel = () => {
        setIsProductModalOpen(false);
    };

    const showAddCartModal = (product) => {
        setIsAddCartModalOpen(true);
        setCart(product);
    };

    const handleAddCartCancel = () => {
        setIsAddCartModalOpen(false);
    };


    const handleProductOk = () => {
        if (!newProduct.modelName || !newProduct.price || !newProduct.imageUrl || !newProduct.count) {
            console.error('The details are required');
            return;
        }
        newProduct.brandId = ID;
        fetch('http://localhost:3001/api/appleproducts?brandId=${ID}', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('New product added:', data);
                setIsProductModalOpen(false);
                setNewProduct({ modelName: " ", price: " ", imageUrl: " ", count: " " });
            })
            .catch((error) => {
                console.error('Error adding product:', error);
                setIsProductModalOpen(false);
                // setNewProduct({ modelName: " ", price: " ", imageUrl: " ", count: " " });
            });
    };

    const addDataToCart = (count) => {
        const newData = {
            brandId: cart.brandId,
            modelName: cart.modelName,
            price: cart.price,
            imageUrl: cart.imageUrl,
            count: count
        };
        setAddToCart(newData);
        console.log("!!!!!!!!!!!---------newData Cart---------!!!!!!!!!!!", newData);
    };


    const handleAddCartOk = () => {
        addDataToCart(count);
        // if (addToCart.brandId && addToCart.modelName && addToCart.price && addToCart.imageUrl && addToCart.count) {
        //     fetch('http://localhost:3001/api/addcart', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(addToCart)
        //     })
        //         .then(response => {
        //             if (!response.ok) {
        //                 throw new Error('Failed to add product to cart');
        //             }
        //             return response.json();
        //         })
        //         .then(data => {
        //             console.log('Product added to cart:', data);
        //         })
        //         .catch(error => {
        //             console.error('Error adding product to cart:', error);
        //         });
        // }

        message.success('Product added to cart');
        setIsAddCartModalOpen(false);

    };


    const handleLike = (product) => {
        if (likedProducts.includes(product)) {
            setLikedProducts(likedProducts.filter((p) => p !== product));
        } else {
            setLikedProducts([...likedProducts, product]);
        }
    };

    const renderProductsCards = () => {
        return products
            .filter(product => product.brandId == ID)
            .map((product, index) => (
                <Card key={index} hoverable style={{ width: 240, backgroundColor: 'white' }} className="product-card">
                    <img src={product.imageUrl} alt='productImage' className="product-image" />
                    <Meta
                        title={product.modelName}
                        description={
                            <div>
                                <div>Price: {product.price}</div>
                                <div>Count: {product.count}</div>
                            </div>
                        }
                    />
                    <span className='product-buttons'>
                        <Button className="ShoppingCart"
                            onClick={() => showAddCartModal(product)}>
                            Add to Cart
                            <ShoppingCartOutlined />
                        </Button>
                        <Button className='LikeButton'
                            onClick={() => handleLike(product)}>
                            {likedProducts.includes(product) ? <HeartFilled /> : <HeartOutlined />}
                        </Button>
                    </span>
                </Card>
            ));
    };

    return (
        <div>
            <div>
                <header className='product-header'>
                    <h1>Products Details</h1>
                </header>
                <div className='Add-button'>
                    <Button type="primary" onClick={showProductModal}>Add Products</Button>
                </div>
                <div className="product-cards">
                    {renderProductsCards()}
                </div>
            </div>
            <ProductModal
                isProductModalOpen={isProductModalOpen}
                handleProductCancel={handleProductCancel}
                handleProductOk={handleProductOk}
                newProduct={newProduct}
                setNewProduct={setNewProduct}
            />
            <AddCartModal
                isAddCartModalOpen={isAddCartModalOpen}
                handleAddCartCancel={handleAddCartCancel}
                handleAddCartOk={handleAddCartOk}
                cart={cart}
                count={count}
                setCount={setCount}
            />
            {/* <AddCart
            
            /> */}
        </div>
    );
};

export default ProductDetails;
