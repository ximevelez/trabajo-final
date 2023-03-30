import { useState } from 'react'

function Baogan(props) {
    return(
        <div className='container'>
        <div className="row mt-2">
        <div className="col-12 col-lg-6 mt-5 img-fluid d-flex justify-content-center ">
          <div className="d-flex align-items-center">
          <img className="game w-100 rounded-circle ms-5" src={`../public/images/${props.game}`} alt=""/>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-5">
            <h1 className="baogan d-flex justify-content-center text-center rounded mt-5" id="baogan">{props.titulo}</h1>
           <p className="contenido-p  rounded">{props.baogan} </p>
        </div>
    
    </div>
</div>
    )
}

export default Baogan
   
  
  