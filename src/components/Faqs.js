import React from 'react'
import './Home.css'
function Faqs() {
  return (
    

<div className="content">
        <h1 className="text-decoration-underline text-center my-5">Frequently Asked Questions</h1>
  <details >
  <summary>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quod.</summary>
  <div className="faq__content">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos minima dolorem possimus esse? Sapiente minima laboriosam velit a nisi omnis.</p>
  </div>
</details>
<details>
  <summary>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos?</summary>
  <div className="faq__content">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur non ullam blanditiis at sed dolore expedita saepe quod voluptate!</p>
  </div>
</details>
<details>
  <summary>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, obcaecati!</summary>
  <div className="faq__content">
    <p>Answer 3</p>
  </div>
</details>
</div>
  )
}

export default Faqs