import React from 'react';
import './Review.css'
import img1 from '../../Images/reviewer-1.png'
import img2 from '../../Images/reviewer-2.png'
import img3 from '../../Images/reviewer-3.png'

const Review = () => {
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 review-card ">
      <img src={img1} class="card-img-top review" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Shona Sperring</h5>
        <h5>Traveller</h5>
        <p class="card-text">The Vacaday team were very fast and efficient in responding to any emails and also with updating me with my travel itinerary, etc. Loved being able yo book everything in the one place, in one transaction. I will most definitely be using Travel Online for my holiday bookings again in the future!</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 review-card ">
      <img src={img2} class="card-img-top review" alt="..."/>
      <div class="card-body">
        <h5 class="card-title"> Ivan Menezes</h5>
        <h5>Traveller</h5>
        <p class="card-text">I love the way you guys are always very helpful and accomodating. Your service is excellent and I am more than happy to use your organisation for all future holidays.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 review-card ">
      <img src={img3} class="card-img-top review" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Joshua Braidwood</h5>
        <h5>Traveller</h5>
        <p class="card-text">We were very happy with our holiday booking and our accommodation. We would book with TravelOnline again and definitely recommend their services to others.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Review;