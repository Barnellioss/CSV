import { response } from './api/api';
import './App.css';
import moment from 'moment'
import ListContainer from './components/listContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        List of lawyers
      </header>
      <ListContainer />
    </div>
  );
}
console.log(response.data)

export default App;
