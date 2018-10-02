import React from 'react';
import './ShopItem.css';
import { observer } from 'mobx-react';

const ShopItem = ({ name, price, onPut }) => {
	// const handleOnPut = () => {
	// 	onPut(name, price);
	// };

	return (
		<div className="ShopItem" onClick={() => onPut(name, price)}>
			<h4>{name}</h4>
			<div>{price}원</div>
		</div>
	);
};

export default observer(ShopItem);
