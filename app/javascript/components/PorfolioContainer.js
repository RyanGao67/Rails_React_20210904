import React, {Component} from 'react'
import Search from './Search'
import Calculate from "./Calculate";
import axios from 'axios';
import Portfolio from "./Portfolio";
class PortfolioContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            portfolio:[],
            search_results:[],
            active_currency:null,
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        axios.post('http://localhost:3000/search', {
            search: this.state.name
        }).then((data)=>{
            this.setState({search_results:[...data.data.currencies]})
        }).catch(
            (error)=>{console.log(error)}
        )
    }
    handleSelect=(e)=>{
        e.preventDefault()
        const id=e.target.getAttribute('data-id')
        const active_currency = this.state.search_results.filter(i=>i.id==parseInt(id))
        console.log("2: "+active_currency[0].name)

        this.setState({
            active_currency:active_currency[0],
            search_results:[]
        })

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let currency = this.state.active_currency
        let amount = this.state.amount

        axios.post('http://localhost:3000/calculate', {
            id:currency.id,
            amount:amount
        }).then((data)=>{
            console.log("1"+data)
            this.setState({
                amount:'',
                active_currency:null,
                portfolio:[...this.state.portfolio, data.data]
            })
        }).catch(
            (error)=>{console.log(error)}
        )
    }
    handleAmount =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const searchOrCalculate = this.state.active_currency?
            <Calculate
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                active_currency={this.state.active_currency}
                amount = {this.state.amount}/> :
            <Search
                handleSelect = {this.handleSelect}
                searchResults={this.state.search_results}
                handleChange={this.handleChange}/>


        return <div>
            {searchOrCalculate}
            <Portfolio portfolio={this.state.portfolio}/>
        </div>
    }
}
export default PortfolioContainer;