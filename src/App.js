import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/index';
import Home from "./Main/Home/index";
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import AddUser from './Main/AddUser/index';
import EditUser from './Main/EditUser/index';

const App =() => {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adduser" component={AddUser} />
        {/*For identify the users "id" use dynamic rounting (id pass as parameter)  */}
        <Route exact path="/edituser/:id" component={EditUser} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
