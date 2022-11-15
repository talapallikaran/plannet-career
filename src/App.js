import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Section from './components/section/Section';

function App() {
  return (
    <div className="App">
      <Header></Header>
    
      <Banner></Banner>
      <Section/>
    </div>
  );
}

export default App;
