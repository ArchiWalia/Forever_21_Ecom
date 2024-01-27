import React from 'react';
import './footer.css';
function Footer() {
  return (
    <div className='oops'>
      <div>
        <h1>Forever 21</h1>
        <p>About Us</p>
        <p>Find A Store</p>
      </div>
      <div>
        <h3>Help</h3>
        <p>Contact Us</p>
        <p>Frequently Asked Questions</p>
        <p>Order Status</p>
        <p>Returns & Refunds</p>
        <p>Returns & Cancellation Policy</p>
        <p>Shipping Policy</p>
      </div>
      <div>
        <h1>Join The Forever 21 Tribe</h1>
        <p>Be the first one to know about the latest deals, new arrivals, style updates & <br /> much more! You can opt out anytime. Privacy Policy & Terms of use</p>
        <div className='pink'>
          <input type="text" placeholder='Enter your email'/>
        <a>Join</a>
        </div>

      </div>
    </div>
  )
}

export default Footer
