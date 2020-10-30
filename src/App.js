import './App.css';
import Login from './Components/Login/Login.component'
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard.component";
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute'

function App() {
  return (
    <div className="App-header">
      <Provider store = {store}>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Provider>
     
    </div>
  );
}

export default App;
