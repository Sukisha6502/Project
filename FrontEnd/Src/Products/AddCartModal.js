import React from 'react';
import { Modal, Input, message } from 'antd';


const AddCartModal = ({ cart, count, setCount, isAddCartModalOpen, handleAddCartCancel, handleAddCartOk }) => {

    console.log("Cart-----products", cart);
    const onInputChange = (e) => {
        const { value } = e.target;
        console.log("Values=", value);
        console.log("cart.count value", cart.count);
        if (Number(value) > Number(cart.count) || isNaN(value) )
        {
            return message.error('Please enter a valid count to buy the Product ');
        }
        else {
            setCount(value);

        }
    };

    console.log("-----After SetCount---", count)
    return (
        <div><Modal
            title=" Buy Details"
            open={isAddCartModalOpen}
            onOk={handleAddCartOk}
            onCancel={handleAddCartCancel}
        >
            <Input
                name="modelName"
                addonBefore="Model Name"
                value={cart.modelName}
                visible
            />
            <Input
                name="price"
                addonBefore="Price"
                value={cart.price}
                readOnly
            />
            <Input
                name="imageUrl"
                addonBefore="Image Url"
                value={cart.imageUrl}
                readOnly
            />
            <Input
                name="count"
                addonBefore="Count"
                value={count}
                onChange={onInputChange}
            />
        </Modal>
        </div>
    )
}

export default AddCartModal;