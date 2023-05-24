import React, { useState } from "react";
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'
import { UilEstate } from "@iconscout/react-unicons"
import { Link, useHistory, useLocation } from "react-router-dom";

const Sidebar = () => {
    const history = useHistory();
    const location = useLocation();

    const [selected, setSelected] = useState(0)

    return (
        <div className="Sidebar">
            {/* logo */}
            <div className='logo'>
                <img src={Logo} alt="" />
                <span>
                    F<span>oo</span>dies
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={location.pathname === item.url ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => {
                                setSelected(index)
                                history.push(item.url)
                            }}>
                            <item.icon />
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    );
                })}

                {/* signoutIcon */}
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    )
}

export default Sidebar