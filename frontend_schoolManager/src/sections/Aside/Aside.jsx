import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './aside.css';
import dataAside from './dataAside'

const Aside = () => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);

    const toggleSidebar = useCallback(() => {
        setSidebarExpanded(prev => !prev);
    }, []);

    useEffect(() => {
        const hamBurger = document.querySelector(".toggle-btn");
        if (hamBurger) {
            hamBurger.addEventListener("click", toggleSidebar);
        }
        return () => {
            if (hamBurger) {
                hamBurger.removeEventListener("click", toggleSidebar);
            }
        };
    }, [toggleSidebar]);

    return (
        <div className='wrapper'>

            <aside id='sidebar' className={sidebarExpanded ? 'expand' : ''}>

                <div className="d-flex">
                    <button className="toggle-btn" type='button'>
                        <i className="bi bi-grid"></i>
                    </button>
                    <div className='sidebar-logo'>
                        <a href='#'>Andres Sanchez</a>
                    </div>
                </div>

                <ul className="sidebar-nav">
                    {dataAside.map((item, index) => (
                        <li key={index} className="sidebar-item">
                            <a href={item.href} className="sidebar-link" data-bs-toggle={item.dropdown ? "collapse" : undefined} data-bs-target={item.dropdown ? `#item-${index}` : undefined} aria-expanded="false">
                                <i className={item.icon}></i>
                                <span>{item.text}</span>
                            </a>
                            {item.dropdown && (
                                <ul id={`item-${index}`} className='sidebar-dropdown list-unstyled collapse' data-bs-parent="#sidebar">
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li key={subIndex} className="sidebar-item">
                                            <a href={subItem.href} className="sidebar-link">
                                                {subItem.text}
                                            </a>
                                            {subItem.dropdown && (
                                                <ul className='sidebar-dropdown list-unstyled collapse'>
                                                    {subItem.dropdown.map((subSubItem, subSubIndex) => (
                                                        <li key={subSubIndex} className="sidebar-item">
                                                            <a href={subSubItem.href} className="sidebar-link">
                                                                {subSubItem.text}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <div className="sidebar-footer">
                    <a href="#" className="sidebar-link">
                        <i className="bi bi-box-arrow-left"></i>
                        <span>Cerrar Sesión</span>
                    </a>
                </div>

            </aside>
            
        </div>
    );
}

export default Aside;
