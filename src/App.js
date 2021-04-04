
import React, { Component } from 'react';

import "./App.css";
import Shopping from "./Shopping";
import Basket from "./Basket";


export default class App extends Component {
	
	
	state={
		qty:0,
		inBasket:[],
		
		isBasket:true,
		
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
				
		return this.state.items.map((item) =>  (
									
			<Shopping 
				name={item.name}
				img={item.img}
				price={item.price}
				inBasket={this.inBasket}
				qty={this.state.qty}
				id={item.name}
				
				
				
				
			/>		
	  	));								
	}
	
	deleteItem = (id,sub)	=> {
		
		this.setState({
			
			inBasket: this.state.inBasket.filter((item) => item.name !== id),
			qty:this.state.qty-1,
			subtotal:this.state.subtotal-sub,
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
	
		
		
		
		return this.state.inBasket.map((item)=>(

		
			
			<Basket
				name={item.name}
				img={item.img}
				price={item.price}
				key={item.key}
				id={item.name}
				deleteItem={this.deleteItem}
				subtotal={this.subtotal}
				
				
				/>
		));
	}
	
	
	inBasket=(item)=>{
		
		 	
		 this.setState({inBasket:[...this.state.inBasket,item],qty:this.state.qty+1});
		if (this.state.inBasket.length>0) {
			this.setState({subtotal:this.state.inBasket.reduce((a,b)=> a.price+b.price)})
		}
		
		
		
	
		
	}					
		

				
	sub=()=>{
		this.state.subtotal.reduce((a,b)=>a+b);
	}				
				
			
	subtotal= (q)=> {
		this.setState({subtotal:q})
		console.log(this.state.subtotal)
	}
		
		
		
				

		
		
		
		 
	cd
	
	render() {
		
		let isBasket= this.state.isBasket;
		
		return (
			<div className="shop">
				<div className="navi">

				<div className="button" onClick={this.shopClick}>Shopping</div>
				<div className="button"onClick={this.basketClick}>Go to basket&nbsp;({this.state.qty})</div>
				
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
											£{this.sub}
									</div>
								</div>							
							
						}					
					</>
				}
			</div>
		);
	}
}
		
						
			
		
			
			
		


			
				
		
				  