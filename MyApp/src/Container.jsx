/* eslint-disable react/prop-types */
import { useState } from "react"
import "./Container.css"

export function Container ({title, children}){

    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed((t) => !t);
    }

    return(
        <div className="container">
            <div className="container-btn">
                <button onClick={handleToggle}>Toggle</button>
            </div>
            {collapsed && (
                <>
                 <div className="titolo">{title}</div>
                 <div className="contenuto">{children}</div>
                </>
            )}
        </div>
    )

}