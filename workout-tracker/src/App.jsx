import Home from './views/Home'
import Progress from './views/Progress';
import WorkoutsLogger from './views/WorkoutLogger';
import WorkoutsList from './views/WorkoutsList';
import {Routes, Route} from 'react-router-dom'
import Navbar from './views/partials/Navbar';
// import './App.css'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/progress' element={<Progress/>} />
      <Route path='/log-workout' element={<WorkoutsLogger/>} />
      <Route path='workout-list' element={<WorkoutsList/>} />
    </Routes>
    </>
  )
}

export default App;
