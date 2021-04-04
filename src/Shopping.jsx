import React, { Component } from 'react';
import Basket from "./Basket";



export default class Shopping extends Component {
   state={
        
        added:"Add to basket",
        isdisabled:false,
        items:{

            img:this.props.img,
            name:this.props.name,
            price:this.props.price,
            key:Math.random(),
            id:this.props.id,
            qty:0
        }
        
    
   }
  
    addtobasket=()=> {
        this.setState({isdisabled:true,added:"Added"});
        return this.props.inBasket(this.state.items)
    } 
  
    render() {
        return (
            
            <div className="item-container">
                <div className="img-container">
				<img src={this.props.img} className="item-image" alt={this.props.name}/>
                </div>
                <div className="name-price-container">
                    <h2 className="item-name">{this.props.name}</h2>
                    <h3 className="item-price">£{this.props.price}</h3>				
				</div>
                
                <button disabled={this.state.isdisabled} className="addbasket" onClick={this.addtobasket}>{this.state.added}</button>
			</div>
            
        );
    }
}
