import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import CardContainer from './components/CardContainer';
import AboutMe from './components/AboutMe';
import '@fontsource/roboto';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <CardContainer/>
    </div>
  );
}

export default App;
