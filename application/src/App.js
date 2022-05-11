import Navbar from './components/navbar/Navbar';
import {Routes, Route} from 'react-router-dom';

import Matches from './components/match-list/Matches';

import './App.css';

function App() {
  return (
    <section className='site-wrapper'>
      <Navbar />

    <Routes>
      <Route path='/live-matches' element={<Matches />} />
    </Routes>

    </section>
  );
}

export default App;
