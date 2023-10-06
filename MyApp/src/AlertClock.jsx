// eslint-disable-next-line react/prop-types
export function AlertClock( {event}) {
    return(
        <div>
            <p>Click the button to see the current TIME</p>
            <button onClick={event}>Click Me</button>
        </div>
    )
}