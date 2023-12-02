import React from 'react'

function Content() {
    return (
        <main className='hero'>
            <div className='hero-content'>
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button className='shop-btn'>Shop Now</button>
                    <button className='catagory-btn'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Avaliable On</p>
                    <div className='brand-icons'>
                        <img className='img1' src="/public/Amazon.png" alt="" />
                        <img className='img2' src="/public/flipkart-logo-39904.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                <img src="/public/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg" alt="" />
            </div>
        </main>
    )
}

export default Content
