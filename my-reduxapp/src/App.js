import logo from './logo.svg';
import './App.css';
import Cakeshop from './components/cakeshop'
import {Provider} from 'react-redux'
import store from './redux_code/cake/store'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
      <Cakeshop/>
        </Provider>
      </header>
    </div>
  );
}

export default App