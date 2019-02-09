import React from 'react';
import ReactDOM from 'react-dom';

import './file.css';

const title = 'Hello World!';

ReactDOM.render(<div className="test">{title}</div>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
