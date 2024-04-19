import './css/App.scss';
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Reservation from './pages/Reservation'
import Confirm from './pages/Confirm'
import Verify from './pages/Verify'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
