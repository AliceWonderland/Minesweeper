import React from 'react';
import { Board } from './board.js'

// removed default

export class App extends React.Component {
	render() {
		return (
		  <div style={{textAlign: 'center'}}>
			  <Board/>
		  </div>);
	}
};