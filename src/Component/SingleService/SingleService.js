import React, { useState ,useEffect} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const SingleService = () => {
    const {id} = useParams();
    const [singleService,setSingleService]=useState({});
    useEffect(() => {
        fetch(`https://blooming-citadel-47487.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, []);
        
    return (
      
           <div className="text-center">
            <img style={{ borderRadius:'30px',width:'35%'}} src={singleService?.img} className="card-img-top p-3" alt="..."/>
            <h1 style={{fontSize:'3rem',fontWeight:'500'}} className="fw-bold text-center animate__animated animate__lightSpeedInRight">{singleService?.service_name}</h1>
            <h1 style={{fontSize:'3rem',fontWeight:'500'}} className="fw-bold text-center">Price :{singleService?.price}</h1>
            <div className="d-flex justify-content-center"><h4 style={{fontSize:'2rem',fontWeight:'500',width:'50%'}}>{singleService?.details}</h4></div>
            <Link to={`/singleService/${singleService?.key}`}> <button className="btn brdr font-color5 w-50 ms-0 mt-5">Book Your Appoinment <i className="fas fa-arrow-right"></i></button></Link>
            


        </div>
    );
};

export default SingleService;