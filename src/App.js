
import React, { Component } from 'react';

import "./App.css";
import Shopping from "./Shopping";
import Basket from "./Basket";


export default class App extends Component {
	
	
	state={
		
		inBasket:[],
		qty:0,
		isBasket:true,
		subtotal:0,
		items:[
			{
				name:"Playstation 5",
				img:"https://specials-images.forbesimg.com/imageserve/5fabfa4c08ccd4cbc1a14a70/960x0.jpg?fit=scale",
				price:440,
				
				
			},
			{
				name:"Xbox X",
				img:"https://www.techinn.com/f/13777/137776929/microsoft-xbox-series-x-1tb.jpg",
				price:410,
				
			},
			{
				name:"Nintendo switch",
				img:"https://media.wired.com/photos/5a3b0970ba20820595a08edb/16:9/w_1825,h_1026,c_limit/nintendo-FA.jpg",
				price:360,
			
			},
			{
				name:"Oculus Rift S",
				img:"https://techgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/15/72/278747_15918_L2.jpg",
				price:290,
				
			},
			{
				name:"X-Box One",
				img:"https://i.gadgets360cdn.com/large/xbox_one_x_e3_2017_1497522853204.jpg",
				price:200,
				
			},
			{
				name:"Playstation 4",
				img:"https://gmedia.playstation.com/is/image/SIEPDC/ps4-slim-image-block-01-en-24jul20?$native--t$",
				price:210,
				
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
				id={item.name}
				countitem={this.countitem}
				qty={this.state.qty}
				
				
			/>		
	  	));								
	}
		
	
	deleteItem = (id)	=> {
		this.setState({
			
			inBasket: this.state.inBasket.filter((item) => item.name !== id)
		});
		this.basket() 

	}
	
		
	shopClick = () => {
		this.setState({isBasket:true})
	}
	basketClick = () => {
		this.setState({isBasket:false})
	}

	basket = () => {
		let newlist=[]
		this.state.inBasket.forEach((obj)=> {
			if (!newlist.some(item=> item.name===obj.name)) {
				newlist.push({...obj})
				
				}
			})	
	
		
		
		
		
		
		return newlist.map((item)=>(

		
			
			<Basket
				name={item.name}
				img={item.img}
				price={item.price}
				key={item.key}
				id={item.name}
				deleteItem={this.deleteItem}
				qty={item.qty}
				inBasket={this.inBasket}
				
				/>
		));
	}
	countitem=(qty)=>{
		
				this.setState({qty:qty+1})
			
	
	}
	
	inBasket=(items)=>{
		
		this.setState({inBasket:[...this.state.inBasket,items]});
		
		
		 
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
				<div className="navi">

				<div className="button" onClick={this.shopClick}>Shopping</div>
				<div className="button"onClick={this.basketClick}>Go to basket&nbsp;({this.state.inBasket.length})</div>
				
				</div>
				
				{isBasket
				? 	<>
						<div className="shop-container">
						
							
							{this.shopping()}
						</div>
					
					</>
				: 	<>
						
						
						{this.state.inBasket<1 
							? 	<div className="empty">Your basket is empty</div>
							: 	<div className="basket-container">
									
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
		);
	}
}
		
						
			
		
			
			
		


			
				
		
				  