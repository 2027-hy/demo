import {useState} from "react"
function App() {
  const frase = "おにつかくんのバカ"
  const [showFrase, setShowFrase] = useState(false);
  function print(){
    if(!showFrase){
      setShowFrase(true);
    }
    else{
      setShowFrase(false);
    }
    
  }
  return (
    <div className = "Apps">
      <button onClick={print} className = "custom_button">"push"</button>
      {showFrase && <p>{frase}</p>}
      </div> 
      );
}

export default App;
