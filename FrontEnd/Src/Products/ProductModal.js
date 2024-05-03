import React from 'react';
import { Modal, Form, Input } from 'antd';
import { useParams } from 'react-router-dom';

const ProductModal = ({isProductModalOpen,handleProductCancel,handleProductOk,newProduct,setNewProduct}) => {

    const onInputChange = (e) => {
        const { name, value } = e.target;
        console.log("Name",name);
        console.log("Values=",value);
        setNewProduct({ ...newProduct, [name]: value });
      };

    const { ID } = useParams();
    console.log("ModalID",ID);

    return (
        <>
            <Modal title=" Add New Brands"
                open={isProductModalOpen}
                onOk={handleProductOk}
                onCancel={handleProductCancel}>
                <Form>
                    <Form.Item
                        name="modelName"
                        label="Model Name"
                    >
                        <Input name="modelName" value={newProduct.modelName} onChange={onInputChange}/>
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Price"
                    >
                        <Input name="price" value={newProduct.price} onChange={onInputChange}/>
                    </Form.Item>
                    <Form.Item
                        name="imageUrl"
                        label="Image Url"
                    >
                        <Input name="imageUrl" value={newProduct.imageUrl} onChange={onInputChange} />
                    </Form.Item>
                    <Form.Item
                        name="count"
                        label="Count"
                    >
                        <Input name="count" value={newProduct.count} onChange={onInputChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default ProductModal;