import './Components/questions/questions';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css"; 
import Questions from './Components/questions/questions';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Consulta aos dados - PPW</h1>
      </div>
      <div>
        <Questions/>
      </div>
    </div>
  );
}

export default App;
