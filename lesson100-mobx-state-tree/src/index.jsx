import React from 'react';
import ReactDOM from 'react-dom';
import { onPatch } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Invoice from './models/Invoice';

const invoice = Invoice.create({
  currency: 'CAD',
  is_paid: false,
});

// 크롬 console 에 해당값의 변화가 있을 때 나타나게 함
onPatch(invoice, (patch) => {
  console.log(patch);
});

// 크롬 mobx tools 에 MST 로 상태변화를 볼 수 있게 한다.
makeInspectable(invoice);

ReactDOM.render(<App invoice={invoice} />, document.getElementById('root'));

serviceWorker.unregister();
