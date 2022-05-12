import {Routes, Route} from 'react-router-dom';
import Details from './components/details/Details';
import Matches from './components/match-list/Matches';
import './App.css';

function App() {
  return (
    <section className='site-wrapper'>
      <Routes>
        <Route path='/live-matches' element={<Matches />} />
        <Route path='/live-matches/:id' element={<Details />} />
      </Routes>
    </section>
  );
}

export default App;
