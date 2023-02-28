import React,{useState} from 'react'
import "./eventcard.css";
const EventCard = (props) => {
  const [isOverview,setIsOverview] = useState(true);


 

    return (
    <div className='card-main'>
    <div className='card-img'>
    <img src={props.url} alt='eventimage'></img>
    
    
    </div>
        
        <div className='card-content-main'>

       
        <div className='card-title'>
            <h1>{props.eventName}</h1>
        </div>

    <div className='card-overview-contact'>
       <div className='card-overview-contact-title'>
       <h2 onClick={()=>setIsOverview(true)}>Overview</h2>
        <h2 onClick={()=>setIsOverview(false)}>Contact</h2>
       </div>
        
       <div className='card-content'>
        {isOverview ? (
            <div className='card-overview-content'>
            <p>{props.overview}</p>
            </div>
            

        ) :
        
        (<div className='card-contact-content'>
            {props.contact.map((element)=>
                
                    <div className='card-contact'>
                    <p>{element.contactName}</p>
                    <p>{element.number}</p>
                    </div>
                    
               
            )}

        </div>)}
        </div>
    </div>

    <div className='card-registration'>
        <div className='card-regis-result'>
        {props.status ? (<div>Registrations open</div>):(<div>Registrations closed</div>)}
        </div>
      
    </div>

    </div>
    </div>
  )
}

export default EventCard