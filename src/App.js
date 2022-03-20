
// import css file
import './App.css';


// import js files
import LoadCountries from './components/LoadCountries/LoadCountries';
import Header from './components/Header/Header';

function App() {
    return (
        <div className = "App">
          <Header></Header>
          <LoadCountries> </LoadCountries>  
        </div>
    );
}


export default App;