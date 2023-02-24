import React from 'react'
import './Home.js'
function Testimonial() {
  return (
    <>
   
    <div className="main">
  <h1>Testimonials</h1>
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=10"/></div>
        <div className="card_content card-color1">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Register Now</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=5"/></div>
        <div className="card_content card-color2">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Register Now</button>
        </div>
      </div>
    </li>
    
   
    
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=2"/></div>
        <div className="card_content card-color3">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Register Now</button>
        </div>
      </div>
    </li>
  </ul>
</div>


    </>
  )
}

export default Testimonial