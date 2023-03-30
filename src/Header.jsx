import { useState } from 'react'

function Header() {
    /*  const [count, setCount] = useState(0) */

    return (
        <div className='container'>
            <div className='menu-principal row'>
                <div className='col-12 col-lg-4 mt-4 img-fluid d-flex justify-content-center'>
                    <img className='logo' src="./images/logo.png" alt="" />

                </div>

                <div className='col-12 col-lg-8 d-flex justify-content-center'>
                    <ul className='menu nav nav-pills img-fluid justify-content-center fs-4 text navbar navbar-expand-lg h-100'>

                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <a className='nav-link fs-2' aria-current='page' href='#baogan'>Baogan</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link fs-2' href='#descubridores'>Descubridores</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link fs-2' href='#aventurate'>Aventúrate</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link fs-2' data-bs-toggle='modal' data-bs-target='#exampleModal' href='#'>Registrate</a>
                                    <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel'
                                        aria-hidden='true'>
                                        <div className='modal-dialog'>
                                            <div className='modal-content'>
                                                <div className='modal-header'>
                                                    <h1 className='modal-title fs-5' id='exampleModalLabel'>Registrate</h1>
                                                    <button type="button" className='btn-close' data-bs-dismiss="modal"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className='modal-body'>
                                                    <div className='container'>
                                                        <div className='card p-3'>
                                                            <div className='mb-3'>
                                                                <form action="">
                                                                    <div className='mb-3'>
                                                                        <label htmlFor="nombre">Nombre</label>
                                                                        <input className='form-control' type="text" name="nombre" id="nombre" placeholder="Nombre" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label htmlFor="apellidos">Apellidos</label>
                                                                        <input className='form-control' type="text" name="apellidos" id="apellidos" placeholder="Apellidos" />
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className='ps-2' htmlFor="correo">Correo</label>
                                                                        <input className='form-control' type="text" name="correo" id="correo" placeholder="Correo electronico" />
                                                                    </div>
                                                                    <div className='mb-3'>
                                                                        <label className='ps-2' htmlFor="numero">Numero</label>
                                                                        <input className='form-control' type="text" name="numero" id="numero" placeholder="Celular" />
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='modal-footer'>
                                                    <button type="button" className='button btn-secondary' data-bs-dismiss='modal'>Close</button>
                                                    <button type="button" className='button btn-primary' >Enviar</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default Header
