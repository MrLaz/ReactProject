
import React, { Component } from 'react';

import "./App.css";
import Shopping from "./Shopping";
import Basket from "./Basket";


export default class App extends Component {
	
	
	state={
		inBasket:[],
		isBasket:true,
		subtotal:0,
		items:[
			{
				name:"Playstation5",
				img:"https://specials-images.forbesimg.com/imageserve/5fabfa4c08ccd4cbc1a14a70/960x0.jpg?fit=scale",
				price:440,
				stock:1,
				
			},
			{
				name:"Xbox X",
				img:"https://www.techinn.com/f/13777/137776929/microsoft-xbox-series-x-1tb.jpg",
				price:410,
				stock:3,
			},
			{
				name:"Nintendo switch",
				img:"https://media.wired.com/photos/5a3b0970ba20820595a08edb/16:9/w_1825,h_1026,c_limit/nintendo-FA.jpg",
				price:360,
				stock:5,
			},
			{
				name:"Oculus Rift S",
				img:"https://techgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/15/72/278747_15918_L2.jpg",
				price:290,
				stock:2,
			}    
		  ],
	}
	
	shopping = () => {
				
		return this.state.items.map((item) => (
									
			<Shopping 
				name={item.name}
				img={item.img}
				price={item.price}
				inBasket={this.inBasket}
				key={Math.random()}
				id={item.key}				
			/>		
	  	))								
	}
		
		
	deleteItem = (id)	=> {
		this.setState({
			inBasket: this.state.inBasket.filter((item) => item.key !== id)
		  });
	}
	
	
	handleclick = () => {
		if (this.state.isBasket===true){
			this.setState({isBasket:false})
		}else  this.setState({isBasket:true})
			
	}
	basket = () => {
		return this.state.inBasket.map((item)=>(
			<Basket
				name={item.name}
				price={item.price}
				key={item.key}
				id={item.key}
				deleteItem={this.deleteItem}
				/>
		))
	}
	
	inBasket=(value)=>{
		 this.setState({inBasket:[...this.state.inBasket,value]});
		
	}
 
	subtotal= ()=> {
		
		let sum= this.state.inBasket.map((item)=>item.price);
		let subtotal=sum.reduce((a,b)=>a+b);
	
		return subtotal;
	}
	render() {
			
		let isBasket= this.state.isBasket;
		
		return (
			<div className="shop">
							
				
				{isBasket
				? 	<>
						<button className="button"onClick={this.handleclick}>Go to basket&nbsp;({this.state.inBasket.length})</button>
						<div className="shop-container">
							{this.shopping()}
						</div>
					
					</>
				: 	<>
						<button className="button" onClick={this.handleclick}>Go to shopping</button>
						
						{this.state.inBasket<1 
							? 	<div className="empty">Basket is empty</div>
							: 	<div className="basket-item-container">
						
									{this.basket()}
									<div className="subtotal">
										<div>Subtotal</div>
											£{this.subtotal()}
									</div>
								</div>							
							
						}					
					</>
				}
			</div>
		)
	}
}
		
						
			
		
			
			
		


			
				
		
				  