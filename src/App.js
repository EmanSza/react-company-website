import Nav from './components/Navigation/nav';
import Header from './components/Header/header';
import About from './components/About/about';
import Work from './components/Work/work';
import Team from './components/Team/team'
import Footer from './components/Footer/footer'


import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Work />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
