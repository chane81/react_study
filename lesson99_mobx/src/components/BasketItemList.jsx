import React from 'react';
import BasketItem from './BasketItem.jsx';
import { inject, observer } from 'mobx-react';

const BasketItemList = ({ items, total, onTake }) => {
	const itemList = items.map(item => (
		<BasketItem
			name={item.name}
			price={item.price}
			count={item.count}
			key={item.name}
			onTake={onTake}
		/>
	));

	return (
		<div>
			{itemList}
			<hr />
			<p>
				<b>총합: </b> {total}원
			</p>
		</div>
	);
};

export default inject(({ marketStore }) => ({
	items: marketStore.selectedItems,
	total: marketStore.total,
	onTake: marketStore.take
}))(observer(BasketItemList));
