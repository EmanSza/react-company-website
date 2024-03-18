import Nav from './components/Navigation/nav';
import Header from './components/Header/header';
import About from './components/About/about'



import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Header />
    </div>
  );
}

export default App;
