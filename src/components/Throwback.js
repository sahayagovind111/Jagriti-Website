import React from 'react'
import './Throwback.css'
export default function Throwback() {
  return (
    <>
     <div className="text-center my-5">
  <h1 className="text-decoration-underline">THROWBACK</h1>
        <p className="px-3 my-3 mx-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam unde, iure magnam corporis repellat iste, amet nostrum expedita possimus, veritatis error sed ea? Itaque, quam veritatis facilis ipsam velit tempore.</p>  

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../Assets/nature.jpg')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../Assets/natures.jpeg')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../Assets/nature.jpg')} className="d-block w-100" alt="..."/>
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
    </div>

    </>
  )
}

