import React, {Component} from 'react'
class Search extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const searchResults = this.props.searchResults.map(
            cur=>{
                return <li key={cur.id} data-id={cur.id} onClick={this.props.handleSelect} className="currency-list-item">
                <a href="#" className="currency">
                    <span>{cur.name}</span>
                    <span>{cur.currency_symbol}</span>
                </a></li>
            }
        )
        return <div><div><h1>Cryptocurrency Portfoio Calculator</h1></div>
        <form>
            <div className="form-group">
                <label>Search for a currency: </label><br/>
                <input
                    onChange={this.props.handleChange}
                    autoComplete="off" type="text" name="name"
                    placeholder="Ex: Bitcoin, Litecoin, Ethreum.."
                    value={this.props.name} className="field"/>
            </div>
            <div className="currency-list">
                {searchResults}
            </div>
        </form>
        </div>
    }
}
export default Search