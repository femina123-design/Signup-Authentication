import React, { Component } from 'react';
import { Link, Router, Route } from 'react-router-dom';
import Signinpage from '../component/Signinpage'
import Formpage from '../component/formPage';
import HomePage from '../Home/homePage';
import PrivateRoute from '../Private/privateRouter.'

class Sitepage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(<div>
            <PrivateRoute exact path="/" component={HomePage}/>
          <Route path="/Signin" component={Signinpage}></Route>
          <Route path="/form" component={Formpage}></Route>
        </div>)
    }

}
export default Sitepage;

