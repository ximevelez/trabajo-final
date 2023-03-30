import { useState } from 'react'

function Objetivo(props) {
  /*  const [count, setCount] = useState(0) */

  return (
    <div className='container'>
      <div className='row'>
        <div className='seccion-p col-12 col-lg-6 mt-4 img-fluid d-flex justify-content-center'>
          <img className='video-inicio rounded' src={`../public/images/${props.videoinicio}`} width="100%" alt="" />
        </div>
        <div className='seccion-p col-12 col-lg-6 text-center text-lg-star'>
          <h1 className='objetivo mt-5 d-flex justify-content-center rounded'>{props.objetivo}</h1>
          
       {   <p className='contenido mt-2 rounded'>{props.contenido} </p>}
        </div>

      </div>
    </div>
  )
}

export default Objetivo



