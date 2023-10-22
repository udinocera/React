import { UseCurrentLocation } from "./UseCurrentLocation";

export const CurrentLocation = () => {
    const {find, latitude, longitude, positionLink} = UseCurrentLocation();

    return(
        <>
        {latitude ? (
            <div>
                <a href={positionLink}>Open Me</a>
                <p>
                    Latitudine : {latitude}
                    <br />
                    Longitudine : {longitude}
                </p>
            </div>
        ) : null }

        <button onClick={find}>Cercami</button>
        </>
    )
}