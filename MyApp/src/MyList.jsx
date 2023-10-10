/* eslint-disable react/jsx-key */
 export function MyList(){

    const names =  ["Umberto", "Luca", "Rosa", "Lucia"]
    
return(
    <ul>{names.map(name => <li>{name}</li>)}</ul>
)
}