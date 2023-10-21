import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { Clock } from "./Clock";




function App() {
  const [language, setLanguage] = useState("it");

  function handleSetLanguage(event){
    setLanguage(event.target.value);
  }
  return (
    <div>
      <select value={language} onChange={handleSetLanguage}>
        <option value="it">IT</option>
        <option value="en">EN</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
    </div>
    
    

  )
}

export default App;
