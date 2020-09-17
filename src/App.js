import React from "react";
import AppRoute from './route/app.route'
import store from './redux/store'
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <AppRoute/>
    </Provider>
    </div>
  );
}

export default App;
