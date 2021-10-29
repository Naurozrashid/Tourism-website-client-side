import React from 'react';
import Review from '../Review/Review';
import './Home.css'


const Home = () => {
    return (
        <div>
            {/* banner part */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div  className="carousel-inner">
    <div className="carousel-item py-5 cover active">
      
       <div class="text-center caption py-2 my-5">
        <div className=" my-5">
            <h3>Lets plan your best vacation</h3>
            <h5>Where Camping Adventures Begin</h5>
            <button className="btn brdr font-color5 my-5">Book Now</button>
        </div>
    </div>
    </div>
    <div className="carousel-item cover2 py-5">
     <div class="text-center caption py-2 my-5">
        <div className=" my-5">
            <h3>Explore the world with us</h3>
            <h5>Where Your Adventures Begin</h5>
            <button className="btn brdr font-color5 my-5">Book Now</button>
        </div>
    </div>
    </div>
    <div className="carousel-item cover3 py-5">
     <div class="text-center caption py-2  my-5">
        <div className=" my-5">
            <h3>Lets plan amazing tour</h3>
            <h5>Where Camping Adventures Begin</h5>
            <button className="btn brdr font-color5 my-5">Book Now</button>
        </div>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
        
            {/* review part */}
            <div className="container mt-5">
                <h5 className="text-orgarge text-center">Our Traveller Say</h5>
            <h3 className="text-center text-size">What Oue Traveller Say <br/> About Us</h3>
            <Review></Review>
            </div>
        </div>

    );
};

export default Home;