import React from 'react'

function SliderItem() {
  return (
    <div className="slider-item fade">
    <div className="slider-image">
      <img src="img/slider/slider1.jpg" className="img-fluid" alt="" />
    </div>
    <div className="container">
      <p className="slider-title">SUMMER 2025</p>
      <h2 className="slider-heading">NEW COLLECTION</h2>
      <p className="slider-title">We know how large objects will act, <br/> but things on scale.</p>
      <a href="#" className="btn btn-lg btn-primary">SHOP NOW</a>
    </div>
  </div>
  )
}

export default SliderItem