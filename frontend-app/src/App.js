import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as d3 from 'd3'; 
import Login from './containers/login/login'
import Register from './containers/register/register'
import Home from './containers/home/home'
import './dist/output.css'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route path="/Login" exact component={Login} />
          <Route path="/Register" exact component={Register} />
          <Route path="/Home" exact component={Home} />
      
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
