import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactDom from 'react-dom'

import App from './app';

export default () => <App/>;

export const mount = (Сomponent, element = document.getElementById('app')) => {
  const root = ReactDOM.createRoot(element);
  root.render(<Сomponent/>);

  if(module.hot) {
    module.hot.accept('./app', ()=> {
      root.render(<Сomponent/>);
    })
  }
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};
