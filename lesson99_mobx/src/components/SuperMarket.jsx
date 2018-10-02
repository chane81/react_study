import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate.jsx';
import ShopItemList from './ShopItemList.jsx';
import BasketItemList from './BasketItemList.jsx';

const SuperMarket = () => {
	return (
		<SuperMarketTemplate
			items={<ShopItemList />}
			basket={<BasketItemList />}
		/>
	);
};

export default SuperMarket;
