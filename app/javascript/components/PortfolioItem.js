import React, {Component} from "react";
class PortfolioItem extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <div>
            <div className="row">
                <div className="col">
                    <div className="header">Currency: {this.props.item.currency.name}</div>
                </div>
                <div className="col">
                    <div className="header">Currency: {this.props.item.current_price}</div>
                </div>
                <div className="col">
                    <div className="header">Amount In Your Portfolio: {this.props.item.amount}</div>
                </div>
                <div className="col">
                    <div className="header">Current value: {this.props.item.value}</div>
                </div>
            </div>
        </div>
    }
}
export default PortfolioItem