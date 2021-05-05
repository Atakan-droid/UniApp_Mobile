import React from 'react';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './src/redux/reducers/index';
import thunk from 'redux-thunk';
import BaseNavigation from './src/navigation/BaseNavigation';

const store = createStore(reducer,applyMiddleware(thunk))

export class App extends React.Component {
  
render(){
  
  return (
    <Provider store={store}>
      <BaseNavigation/>
  </Provider>
  );
  
}
};
export default App;