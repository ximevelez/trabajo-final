import { useState } from 'react'

function Carrusel() {
  /*  const [count, setCount] = useState(0) */

  return (
    <div className='container'>
      <div className='d-flex carrusel justify-content-center mt-4'>
        <div id="carouselExampleIndicators" className='carousel slide' data-bs-ride="true" style={{ width: '400px' }}>
          <div className='carousel-indicators'>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active rounded'>
              <img src="./images/evita.png" className='d-block w-100' alt="..." />
            </div>
            <div className='carousel-item rounded'>
              <img src="./images/evito.png" className='d-block w-100' alt="..." />
            </div>
            <div className='carousel-item'>
              <img src="./images/Baogan.png" className='d-block w-100' alt="..." />
            </div>
          </div>
          <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className='carousel-control-prev-icon' aria-hidden="true"></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className='carousel-control-next-icon' aria-hidden="true"></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carrusel