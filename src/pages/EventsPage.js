
import React,{useState,useEffect} from 'react'
import Events from "../components/Events"
import {useFirebase} from "../context/Firebase";
import EventCard from '../components/EventCard/EventCard';

const EventsPage = () => {
const firebase = useFirebase();


  
 function Fetchdata(){
  // const collectionData = firebase.fetchEventData("events").then(result => setEventData((prev)=>[...result]))
  Promise.all([firebase.fetchCollectionData("events"),firebase.fetchEventImages()])
  .then((value)=>console.log("sucess"))
  .catch((error)=>console.log(error))
  
  
}
useEffect(()=>{
  Fetchdata()
},[])


  
  return (  
    <div>
      
    <Events/>
    {
      firebase.EventData.map((edata)=><EventCard eventName={edata.eventName} overview={edata.overview} contact={edata.contact} status={edata.status}></EventCard>)
    }
    </div>
  )
}

export default EventsPage