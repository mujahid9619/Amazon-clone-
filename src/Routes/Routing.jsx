import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Header from '../Components/Header/Header'
import Checkout from '../Components/Checkout/Checkout'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
const Routing = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path = "/" component  = {Home}/>
                <Route exact path = "/checkout" component = {Checkout}/>
                <Route exact path= '/login' component = {Login}/>
                <Route exact path= '/register' component = {Register}/>
            </Switch>
        </div>
    )
}
export default Routing