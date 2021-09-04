import React, {Component} from 'react'
import PortfolioContainer from './PorfolioContainer'
import axios from "axios";
const csrfToken = document.querySelector('[name="csrf-token"]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
axios.defaults.withCredentials = true
class App extends Component {
    render(){
        return <PortfolioContainer/>
    }
}
export default App