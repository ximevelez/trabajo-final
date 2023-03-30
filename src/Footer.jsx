import { useState } from 'react'

function Footer() {
  /*  const [count, setCount] = useState(0) */

  return (
    <div className="container-fluid">
      <div className="col pie-p p-3 mt-2">
        <div className="row">

          <h5 className="contactanos d-flex justify-content-center ">Contáctanos</h5>
          <div className="d-flex justify-content-center mt-4 ms-4">

            <a href="#"><img className="icono1 btn-footer mt-2 me-5 " src="./images/face.png" alt="" /></a>
            <a href="#"><img className="icono2 btn-footer mt-2 me-5 " src="./images/insta.png" alt="" /></a>
            <a href="#"><img className="icono3 btn-footer mt-2 me-5" src="./images/twitter.png" alt="" /></a>
          </div>

        </div>

        <div className="creditos text-center p-3 text-white fs-3" style={{backgroundColor: 'rgba(154, 25, 34, 0.671)'}}>
          ©Baogan 2023
        </div>
      </div>

    </div>
  )
}

export default Footer