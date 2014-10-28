// JavaScript Document
/**
* The Coin class is a blueprint for a typical coin
* @author	Brandon Boomhower
* @version	1.0 October 28th, 2014
*/
function Coin(){
	this.item_on_page //represent coin's visual presence on page
	this.x;//keep track of each individual coin's left right position	
	this.y;//keep track of each individual coin's top bottom position
	/**
	* The destroy method puts the graphic on the page and formats it
	*
	*/
	
	this.create=function(){
		//make an img tag, set src to the image in the img folder	
		this.item_on_page = document.createElement("img");
		this.item_on_page.src = "img/coin.png";
		this.item_on_page.style.position = "absolute";
		//store a random X and Y value that's between 0 and the edge of the playing(500x300) are. Different number for each coin.
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*300);
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top =  this.y + "px";
		
		//actually put the img tag onto the page:
		document.body.appendChild(this.item_on_page);
	
	}
	
	this.destroy=function(){
		
	}
}
onload=init;
function init(){
	var coin1 = new Coin();
	coin1.create();
	var coin2 = new Coin();
	coin2.create();
	var coin3 = new Coin();
	coin3.create();
	var coin4 = new Coin();
	coin4.create();
	var coin5 = new Coin();
	coin5.create(); 
}