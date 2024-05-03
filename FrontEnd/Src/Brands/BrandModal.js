import React from 'react';
import { Modal, Form, Input } from 'antd';

const BrandModal = ({isBrandModalOpen,handleBrandCancel,handleBrandOk,newBrand,setNewBrand}) => {

    const onInputChange = (e) => {
        const { name, value } = e.target;
        console.log("Name",name);
        console.log("Values=",value);
        setNewBrand({ ...newBrand, [name]: value });
      };
    return (
        <>
            <Modal title=" Add New Brands"
                open={isBrandModalOpen}
                onOk={handleBrandOk}
                onCancel={handleBrandCancel}>
                <Form>
                    <Form.Item
                        name="brandName"
                        label="brand Name"
                    >
                        <Input name="brandName" value={newBrand.brandName} onChange={onInputChange}/>
                    </Form.Item>
                    <Form.Item
                        name="imageUrl"
                        label="Image Url"
                    >
                        <Input name="imageUrl" value={newBrand.imageUrl} onChange={onInputChange} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default BrandModal