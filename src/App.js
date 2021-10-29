import logo from './logo.svg';
import './styles/App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Genre from './pages/Genre';
import Trending from './pages/Trending';
import GenreDetail from './pages/GenreDetail';
import {useState, useEffect } from 'react'
import {fetchGenres} from './helper/api'
import Artists from './pages/Artists';

function App() {
  const [genres, setGenres] = useState([])
    
    useEffect(() => {
        fetchGenres().then(setGenres)
    }, [])

  return (
    <Router>
      <header className="header">
        <Header />
      </header>
      <main>
        <Switch>
        <Route path='/artist/:id' component={Artists} />
        <Route path='/genre/:id' component={ (props) => (<GenreDetail {...props} genres={genres} />)} />
        <Route path='/genre' component={(props) => ( <Genre {...props} genres={genres} />)} />
        <Route path='/trending' component={Trending} />
        <Route exact path='/' component={Home} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
