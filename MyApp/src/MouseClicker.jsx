export function MouseClicker() {
    function handleButtonEvent(event){
        console.log(event.target.name)
    }
    return(
        <div>
            <button name="bottone"onClick={handleButtonEvent}>Clicca qui per vedere come si chiama il bottone</button>
        </div>
    )
}