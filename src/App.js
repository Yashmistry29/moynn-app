import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './Components/SignUp'
import Cv from './Components/Cv'
import Information from './Components/Information'
import Career from './Components/Career'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignUp}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/cv" component={Cv}/>
        <Route exact path="/information" component={Information}/>
        <Route exact path="/career" component={Career}/>
      </Switch>
    </Router>
  );
}

export default App;
