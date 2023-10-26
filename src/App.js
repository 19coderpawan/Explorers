import Contacts from "./Components/Contacts";
import Hero from "./Components/Hero";

import Who from "./Components/Who";
import Work from "./Components/Work";
import './Style.css';



function App() {
  return (
    <>
      <div className="Container">

        <Hero />

        <Who />

        <Work />

        <Contacts />

       
        
      </div>
    </>


  )
}

export default App;
