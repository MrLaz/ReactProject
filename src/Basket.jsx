import React, { Component } from 'react';
import "./App.css";

export default class Basket extends Component {

    state= {
        
        price:this.props.price,
        qty:1,
        
        id:this.props.id
    }
    handleClick = () => {
        this.props.deleteItem(this.props.id,this.state.qty*this.props.price);
    }
   
    
    reduceitem = () => {
        if (this.state.qty>0){
            this.setState({qty:this.state.qty-1})
           
        }
    }        
     
         
        
    
    additem = () => {
        
        this.setState({qty:this.state.qty+1})
        
       
    }
    
    update=()=>{
        this.props.subtotal(this.state.qty*this.state.price)
        
    }
    render() {
          this.update(); 
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
