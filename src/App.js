import {Route,BrowserRouter} from "react-router-dom"
import HomePage from './Components/HomePage'
import Starships from './Components/Starships'
import Starship from './Components/Starship'
import Planets from './Components/Planets'
import Planet from './Components/Planet'
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" render={()=><HomePage/>}/>
    <Route exact path="/starships" render={()=><Starships/>}/>
  
    <Route exact path="/starship" render={()=><Starship/>}/>
    <Route exact path="/planets" render={()=><Planets/>}/>
  
    <Route exact path="/planet" render={()=><Planet/>}/>
    

    </BrowserRouter>
  );
}

export default App;
