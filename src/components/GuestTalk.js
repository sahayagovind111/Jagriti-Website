import React from 'react'
import './guesttalk.css'

function GuestTalk() {
  return (
      <>
   
    <div className="main">
  <h1 className='hello'>GuestTalk</h1>
  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=10"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Register Now</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=5"/></div>
        <div className="card_content">
          <h2 className="card_title">Card Grid Layout</h2>
          <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
          <button className="btn card_btn">Register Now</button>
        </div>
      </div>
    </li>
    
   
    
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=2"/></div>
        <div className="card_content">
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

export default GuestTalk