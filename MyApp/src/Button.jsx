// eslint-disable-next-line react/prop-types
export function Button({event, name}) {
    return(
        <>
            <button onClick={event}>{name}</button>
        </>
    )
}