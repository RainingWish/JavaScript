import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import store from './store/index';
import Home from './Pages/home';
import detail from './Pages/detail';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalStyleFont />
        <Provider store={store}>
            <BrowserRouter>
              <div>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail' component={detail}></Route>
              </div>
            </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
