
import React,{useState,useEffect} from 'react'
import Events from "../components/Events"
import {useFirebase} from "../context/Firebase";
import EventCard from '../components/EventCard/EventCard';

const EventsPage = () => {
const firebase = useFirebase();
const [eventData,setEventData] = useState([]);

  
async function Fetchdata(){
  const collectionData = await firebase.fetchEventData("events").then(result => setEventData((prev)=>[...result]))
  console.log(collectionData.data());
}
useEffect(()=>{
  setEventData([])
  Fetchdata()
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