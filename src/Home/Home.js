import React from 'react';
import "./Home.css";
import Product from "../Products/Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                    <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""/>
                <div className="home__row">
                    <Product id="456" 
                    title="TCL 32 3-Series 720p Roku Smart TV - 32S335" 
                    price={148.00} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61ficuy07aL._AC_SL1200_.jpg"
                    rating={5}/>
                    <Product id="15" 
                    title="Acer Swift 5 Intel Evo Thin & Light Laptop,
                    14 Full HD Touch, Intel Core i7-1165G7, Intel Iris Xe Graphics, 
                    16GB LPDDR4X, 1TB NVMe SSD, Wi-Fi 6, FPR, Back-lit KB, Antimicrobial, SF514-55TA-74EC" 
                    price={1,149.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61cnBGXT6OL._AC_SL1004_.jpg"
                    rating={4}/>
                </div>
                    <div className="home__row">
                        <Product id="98" 
                        title="DualSense Wireless Controller" 
                        price={69.98} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61o7ai%2BYDoL._SL1441_.jpg"
                        rating={5} />
                        <Product id="55" 
                        title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 256 GB" 
                        price={399.00 } 
                        image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
                        rating={5} />
                        <Product id="78" 
                        title="1200Mbps WiFi Rang Extender with 4 Advanced External Antennas Home Signal Booster with Ethernet Port Wireless Internet Amplifer 2.4G & 5G Dual Band Repeater/AP/Router Mode WPS Button" 
                        price={49.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51YIuF71IoL._AC_SL1000_.jpg"
                        rating={5} />
                    </div>
                     <div className="home__row">
                        <Product id="45" 
                        title="New Alienware Aurora R10 Gaming Desktop, AMD Ryzen 7 3700X, AMD Radeon RX 5700 XT 8GB GDDR6, 512GB SSD + 1TB HDD, 16GB, Windows 10 Home, AWAUR10-A886BLK-PUS" 
                        price={1,299.00} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71WG%2BkXUe0L._AC_SX569_.jpg"
                        rating={5} />
                    </div>
            </div>
            
        </div>
    )
}

export default Home;
