/* eslint-disable react/prop-types */
import "./Container.css"

export function Container ({title, children}){
    return(
        <div className="container">
        <div className="titolo">{title}</div>
        <div className="contenuto">{children}</div>
        </div>
    )

}