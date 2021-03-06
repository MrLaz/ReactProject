import React, { Component } from 'react';
import "./App.css";

export default class Basket extends Component {

    state= {
        
        price:this.props.price,
        qty:this.props.qty,
        key:this.props.key
    }
    handleClick = () => {
        this.props.deleteItem(this.props.id);
    }
   
    
    reduceitem = () => {
        if (this.state.qty>=0) {
            this.setState({qty:this.state.qty-1})
           
        }else this.handleClick();
    }
    additem = () => {
        
        this.setState({qty:this.state.qty+1})
        
       
    }
  
    render() {
       
           
        return (
            <>
            
            <div className="basket-item-container">
                <div className="basket-img-container">

                <img src={this.props.img} className="basket-image" alt={this.props.name}/>
                </div>
                <div className="basket-name">{this.props.name}</div>
                <div className="input-container">

                    <div className="input-div">
                            <span className="qty">Qty:&nbsp;&nbsp;</span>
                        
                            <button onClick={this.reduceitem} className="minus-plus">-</button>
                            <div className="basket-qty"> {this.state.qty}</div>
                                
                                
                            
                            <button onClick={this.additem} className="minus-plus">+</button>
                        </div> 
                      
                <button className="basket-button" onClick={this.handleClick}>Delete</button>            
                </div>
                <div className="basket-price">£{this.state.qty*this.state.price}</div>				
            </div>
            </>
        )
    }
}
