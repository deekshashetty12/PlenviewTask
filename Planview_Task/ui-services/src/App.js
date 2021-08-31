import './App.css';
import {Provider} from 'react-redux';
import {Store} from './redux/Store';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider store ={Store}>
      <div className="App">
        <HomePage/>
      </div>
    </Provider>
    
  );
}

export default App;
