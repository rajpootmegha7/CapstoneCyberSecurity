
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './containers/login/login'
import Register from './containers/register/register'
import Home from './containers/home/HomePage'
import Logout from './containers/logout/logout'
import ProtectedRoute from './components/ProtectedRoute';
import General from './containers/general/general';
import './index.css';

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
          <Route path='/Logout' exact component={Logout} />
          <Route path='/general_info' exact component={General} />
          <ProtectedRoute path='/Home' exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
