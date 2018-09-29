import { observable, action, computed } from 'mobx';

export default class MarketStore {
	@observable
	selectedItems = [];

	// 장바구니에 추가
	@action
	put = (name, price) => {
		// 아이템이 존재하는가
		const exists = this.selectedItems.find(item => item.name === name);

		// 존재하지 않는다면 새로 넣는다
		if (!exists) {
			this.selectedItems.push({
				name,
				price,
				count: 1
			});

			return;
		}

		// 존재한다면 count 값만 올림
		exists.count++;
	};

	// 장바구니에서 제거
	take = name => {
		const itemToTake = this.selectedItems.find(item => item.name === name);

		itemToTake.count--;

		// 한개씩 제거하다가 카운트가 0 이 되면 배열에서 제거
		if (itemToTake.count === 0) {
			this.selectedItems.remove(itemToTake);
		}
	};

	// 총합 계산
	@computed
	get total() {
		console.log('총합 계산');
		return this.selectedItems.reduce((previousValue, currentValue) => {
			return previousValue + currentValue.price * currentValue.count;
		}, 0);
	}
}
