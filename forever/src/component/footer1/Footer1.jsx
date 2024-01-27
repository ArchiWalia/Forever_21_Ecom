import React from 'react';
import './footer1.css';
import { FaTruckFast } from "react-icons/fa6";
import { SiMoneygram } from "react-icons/si";
import { HiGift } from "react-icons/hi";
function Footer1() {
    return (
        <div className='yellow'>
            <div>
                <FaTruckFast />
                <p>FREE SHIPPING</p>
            </div>
            <div>
                <SiMoneygram />
                <p>EASY RETURNS</p>
            </div>
            <div>
                <HiGift />
                <p>EXPRESS DELIVERY</p>
            </div>

        </div>
    )
}

export default Footer1
