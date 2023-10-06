export function AlertClock() {
    function handleButtonClick(){
        alert("Sono le: " + new Date().toLocaleTimeString())
    }
    return(
        <div>
            <p>Click the button to see the current TIME</p>
            <button onClick={handleButtonClick}>Click Me</button>
        </div>
    )
}