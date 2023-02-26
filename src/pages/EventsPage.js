import { result } from 'lodash';
import React,{useState,useEffect} from 'react'
import Events from "../components/Events"
import {useFirebase} from "../context/Firebase";
import EventCard from '../components/EventCard/EventCard';

const EventsPage = () => {
const firebase = useFirebase();
const [eventData,setEventData] = useState([]);
  
useEffect(()=>{ 
  const collectionData = firebase.fetchEventData("events").then(result => setEventData((prev)=>[...prev,...result])) 
 
  },[])

  console.log(eventData)
  return (  
    <div>
      
    <Events/>
    {
      eventData.map((edata)=><EventCard eventName={edata.eventName} overview={edata.overview} contact={edata.contact} status={edata.status}></EventCard>)
    }
    </div>
  )
}

export default EventsPage