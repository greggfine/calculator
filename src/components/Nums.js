import React from 'react';
import Display from './Display';

const Nums = ({ nums }) => {
	const mappedNums = nums.map((num) => {
		return <div 
				className="num" id={ num.id }
				key={ num.id }>{ num.val }</div>
	})

	return (
		<div className="num-grid">
			<Display />
			{ mappedNums }
			<div id="ac" className="operator">AC</div>
			<div id="divide" className="operator">/</div>
			<div id="multiply" className="operator">X</div>
			<div id="subtract" className="operator">-</div>
			<div id="add" className="operator">+</div>
			<div id="equal" className="operator">=</div>
		</div>
	)
}

export default Nums;