import React, { Component } from 'react';
import Nums from './Nums';
import numArray from './NumArray';

class NumPad extends Component{
	constructor(props){
		super(props)

		this.state={
			numArray
		}
	}
	render(){
		const { nums } = this.state;
		return (
			<div>
				<Nums nums={ numArray }/>
			</div>
			)
	}
}

export default NumPad;