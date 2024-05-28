import React from 'react';
import colegioLogo from '../../assets/logos/colegio.png'
import './header.css'

const HeaderComponent = () => {
    return (
        <header className='container-fluid header d-flex justify-content-between'>
            <div>
                <img src={colegioLogo} alt=""  style={{maxWidth:"4em"}}/>
            </div>
            <div className='d-flex buttons'>
                <button className='btn btn-outline-danger btn-sm rounded-circle me-2'>
                    <i className="bi bi-arrows-angle-expand"></i>
                </button>
                <button className='btn btn-outline-danger btn-sm rounded-circle me-2'>
                    <i className="bi bi-moon-stars-fill"></i>
                </button>
                <button className='btn btn-outline-danger btn-sm rounded-circle'>
                    <i className="bi bi-person"></i>
                </button>
            </div>
        </header>
    );
}

export default HeaderComponent;
