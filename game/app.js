import React, { Component } from 'react';
import { Board } from './board.js';

import './app.css'; //loading twice for some reason

export class App extends Component {
	constructor(){
		super();
		this.state=new Board();

		this.handleClick=this.handleClick.bind(this);
		this.handleRtClick=this.handleRtClick.bind(this);
	}

	handleClick(id,clear,mine){

		// this.state.clearSpot(id);

		console.log('click',id,clear,mine);
		console.log('state', this.state.spots[id],{id:id, cleared:true, mine:mine});
		var tmp= [...this.state.spots];
		tmp[id]={cleared:true, mine:mine};

		this.setState({ spots:tmp });
		console.log('final state',this.state);
	}

	handleRtClick(e){
		e.preventDefault();
		console.log('rt click');
	}

	render() {
		var spots=this.state.spots;
		return (
		  <div className="app">
			  <h1>Minesweeper</h1>
			  <ul>
			  {
				spots.map((item,ind) => {
					return(
					  <li key={ind} className={item.cleared ? (item.mine)? 'bomb':'open' : 'not'} cleared={item.cleared.toString()} mine={item.mine.toString()} onClick={this.handleClick.bind(this, ind, item.cleared, item.mine)} onContextMenu={this.handleRtClick}>{(item.cleared && item.mine) ? <i className="fa fa-bomb" aria-hidden="true"></i> : '.'}</li>
					);
				})
			  }
			  </ul>
		  </div>);
	}

}