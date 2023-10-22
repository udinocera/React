import { useState } from "react"


export const UseCurrentLocation = () => {
    const[location, setLocation] = useState({
        latitude:"",
        longitude:"",
        positionLink:"",
    })

    const find = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                positionLink: `https://www.openstreetmap.org/#map=18/${position.coords.latitude}/${position.coords.longitude}`
            })
        })
    }

    return { find, ...location};
}