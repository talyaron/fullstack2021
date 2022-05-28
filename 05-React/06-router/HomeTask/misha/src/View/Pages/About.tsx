import React from 'react'

const About = () => {
  return (
    <section className='pageContainer'>
      <section className='About'>
      <img src={require('../../img/About.jpeg')} alt='AboutPic' className='aboutImg'></img>
      <div className='About-text'>
        <h1>About Us</h1>
        <h5>Fasion & Art Design</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Hic, consequuntur ipsum? Nemo facere quam enim quia,
          sint incidunt nobis sed molestiae natus distinctio
          quaerat asperiores nostrum tempore eligendi sapiente quasi?</p>
          <button className="custom-btn btn-16">Lets Talk!</button>
      </div>
      </section>
    </section>
  )
}

export default About