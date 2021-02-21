import React, { Component } from 'react';
import "./App.css";

export default class Basket extends Component {

    handleClick = () => {
        this.props.deleteItem(this.props.id);
    }

    render() {
        return (
            <div className="basket-container">
                <button className="basketDel" onClick={this.handleClick}>Delete</button>            
                <div className="basket-name">{this.props.name}</div>           
                <div className="basket-price">£{this.props.price}</div>				
            </div>
        )
    }
}
