import React,{useState} from 'react'
import "./eventcard.css";
const EventCard = (props) => {
  const [isOverview,setIsOverview] = useState(true);


 

    return (
    <div>
    <div className='card-img'>
    <img src={props.url} alt='eventimage'></img>
    
    
    </div>
        <div className='card-title'>
            <h2>{props.eventName}</h2>
        </div>

    <div className='card-overview-contact'>
        <h2 onClick={()=>setIsOverview(true)}>Overview</h2>
        <h2 onClick={()=>setIsOverview(false)}>Contact</h2>
        {isOverview ? (<div className='card-content'>
            <p>{props.overview}</p>

        </div>) :
        
        (<div className='card-content'>
            {props.contact.map((element)=>
                <>
                    <div className='card-contact'>
                    <h1>{element.contactName}</h1>
                    <h2>{element.number}</h2>
                    </div>
                    
                </>
            )}

        </div>)}
    </div>

    <div className='card-registration'>
        {props.status ? (<div>Registrations open</div>):(<div>Registrations closed</div>)}
    </div>

    </div>
  )
}

export default EventCard