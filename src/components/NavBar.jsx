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
        <button onClick={handleOpenClick} className="three-bars">
            <img src={bars}>
            </img>
        </button>
        {open && (
             <ul>
                <li>
                    <Link to={'/block'}>
                        Block 1
                    </Link>
                </li>
                <li>
                    Block 2
                </li>
                <li>
                    Block 3
                </li>
                <li>
                    Block 4
                </li>
                <li>
                    Block 5
                </li>
                <li>
                    Block 6
                </li>
             </ul>
        )
        }
        </div>
    )
}

export default NavBar