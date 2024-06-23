import React, { useCallback, useEffect, useState } from 'react'
import './asideProfile.css'

const AsideProfile = () => {
    const [asideExpanded, setAsideExpanded] = useState(false)

    const toggleSide = useCallback(() => {
        setAsideExpanded(prev => !prev);
    }, []);

    useEffect(() => {
        const btnProfile = document.querySelector(".btn-profile");
        if (btnProfile) {
            btnProfile.addEventListener("click", toggleSide);
        }
        return () => {
            if (btnProfile) {
                btnProfile.removeEventListener("click", toggleSide);
            }
        };
    }, [toggleSide]);



    return (
        <div id='asideProfile' className={`container-fluid ${asideExpanded ? 'expand' : ''}`}>
            <header>
                <h1>Mi perfil</h1>
            </header>
            <main>
                <div>
                    <div>
                        <h2>Andres Sanchez</h2>
                        <p>andres.st@gmai.csm</p>
                    </div>
                    <div>
                        <i></i>
                    </div>
                </div>
                <div>
                    <h2>Administrador</h2>
                </div>
                <div>
                    <h2>Support</h2>
                </div>

                <button onClick={toggleSide}>Cerrar</button>
            </main>
        </div>
    )
}

export default AsideProfile