/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react"

function Color({item}){
    return <li key={item.id}>{item.name}</li>
}

export default Color