
import React,{useState,useEffect} from 'react'
import Events from "../components/Events"
import {useFirebase} from "../context/Firebase";
import EventCard from '../components/EventCard/EventCard';

const EventsPage = () => {
const firebase = useFirebase();


  
 function Fetchdata(){
  // const collectionData = firebase.fetchEventData("events").then(result => setEventData((prev)=>[...result]))
  const Data = firebase.fetchCollectionData("events");
  
}
useEffect(()=>{
  Fetchdata()
},[])


  
  return (  
    <div>
      
    <Events/>
    {
      firebase.EventData.map((edata)=><EventCard eventName={edata.eventName} overview={edata.overview} contact={edata.contact} status={edata.status} url={edata.imageURL}></EventCard>)
    }
    </div>
  )
}

export default EventsPage