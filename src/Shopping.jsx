import React, { Component } from 'react';




export default class Shopping extends Component {
   state={
        
        
        
        
        items:{

			img:this.props.img,
			name:this.props.name,
			price:this.props.price,
			key:Math.random(),
			id:this.props.id,
			qty:this.props.qty
		}
    
   }
  
    handleclick=()=> {
        this.props.inBasket(this.state.items)
        this.props.countitem(this.state.items.qty)
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
                <button className="addbasket" onClick={this.handleclick}>Add to basket</button>
			</div>
            
        );
    }
}
