import React, { Component } from 'react'



export default class Shopping extends Component {
   state={
       items:{
           name:this.props.name,
           price:this.props.price,
           key:Math.random(),
       }
   }
     
    addToBasket = () =>{
        
        this.props.inBasket(this.state.items);
    }
        
               
    render() {
        return (
            
            <div className="item-container">
				<h2 className="item-name">{this.props.name}</h2>
				<img src={this.props.img} className="item-image" alt={this.props.name}/>
				<h3 className="item-price">£{this.props.price}</h3>				
				<button className="addbasket" onClick={this.addToBasket}>Add to basket</button>
			</div>
            
        );
    }
}
