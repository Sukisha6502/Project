import React from 'react'
import { WhatsAppOutlined, InstagramOutlined, FacebookOutlined, PhoneOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <div>
            <div className='Footer-head'>
                <h3>About Us:</h3>
                <p>Poorvika is the Largest Tech Retailer in India, spanning across 460+ showrooms in and around Tamil Nadu, Karnataka, Pondicherry, Mumbai, Pune and Trivandrum, famous for their touch & feel experience. Poorvika sells a wide category of devices in its showrooms and Online portal, ranging from the Best Smartphones, Laptops, Computers, Smart Devices, Smart TVs to Accessories. Poorvika's E-Commerce platform www.poorvika.com caters to customers across India where Customers can Comfortably Order their devices with just a tap and get them delivered Safely with delivery options such as 2 Hours Delivery, Same Day Delivery, Next Day Delivery, and a Pickup at the Store option based on their location. Having served over 5 Crore+ Happy Customers, Poorvika takes pride in being India's leading retailer for Top Brands like Apple, Samsung, Oppo, Vivo, Xiaomi, OnePlus, Redmi, Realme, Nokia, etc..</p>
            </div>
            <div className='Footer'>
                <span>
                    Contact us
                    <span1 className='FooterIcons'>
                        < PhoneOutlined />
                        <WhatsAppOutlined />
                        <InstagramOutlined />
                        <FacebookOutlined />
                    </span1>
                </span>
                <p>Phone : 9876543210</p><br />
                <p>Mobile phones are considered an important human invention as it has been one of the most widely used and sold pieces of consumer technology.[7][9] They have also become culturally symbolic. In Japanese mobile phone culture for example, mobile phones are often decorated with charms. They have also become fashion symbols at times.[101] The Motorola Razr V3 and LG Chocolate are two examples of devices that were popular for being fashionable while not necessarily focusing on the original purpose of mobile phones, i.e. a device to provide mobile telephony.
                </p>
            </div>


        </div >
    )
}

export default Footer