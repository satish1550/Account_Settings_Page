import { useState } from "react";
import "./App.css";
import Leftbar from "./components/leftbar/Leftbar";
import Settings from "./pages/settings/Settings";
import Subscription from "./pages/subscription/Subscription";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState("Satish Daraboina");

  return (
    <div className="container">
      <Router>
        <div className="leftbar">
          <Leftbar name={name} />
        </div>
        <div className="main-content">
          <Switch>
            <Route exact path="/">
              <Settings name={name} setName={setName} />
            </Route>
            <Route path="/subscription">
              <Subscription />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
