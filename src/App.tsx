import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import "../src/scss/style.css";
import Main from './components/Main';
import store, { persistor } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main/>
      </PersistGate>
    </Provider>
  );
}

export default App;
