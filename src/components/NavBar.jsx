import { useState } from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

import bars from '../assets/three-bars.svg'

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const handleOpenClick = () => {
        setOpen(prev => !prev);
    };

    return (
        <div className={open ? 'top-bar open' : 'top-bar closed'}>
        <Link to={'/'}>
            <h2 className={open ? 'open-header' : 'closed-header'}>
                CA Legislative Guru
            </h2>
        </Link>
        <button onClick={handleOpenClick} className="three-bars">
            <img src={bars}>
            </img>
        </button>
            <div className={open ? 'open-bar bar-open' : 'open-bar bar-closed'}>
             <ul>
                <li>
                    <Link to={'/block1'} onClick={handleOpenClick}>
                        Block 1
                    </Link>
                </li>
                <li>
                    <Link to={'/block2'} onClick={handleOpenClick}>
                        Block 2
                    </Link>
                </li>
                <li>
                <Link to={'/block3'} onClick={handleOpenClick}>
                        Block 2
                </Link>
                </li>
                <li>
                <Link to={'/block4'} onClick={handleOpenClick}>
                        Block 2
                </Link>
                </li>
                <li>
                <Link to={'/block5'} onClick={handleOpenClick}>
                        Block 2
                </Link>
                </li>
                <li>
                    <Link to={'/block6'} onClick={handleOpenClick}>
                            Block 2
                    </Link>
                </li>
             </ul>
             </div>

        </div>
    )
}

export default NavBar