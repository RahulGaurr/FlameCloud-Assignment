import logo from './logo.svg';
import './App.css';
import ActionPlansPannel from './components/ActionPlansPannel';
import SopAccessPannel from './components/SopAccessPannel';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return <>
  <BrowserRouter>
  <Routes>
      <Route path='/' element={<ActionPlansPannel />}/>   
      <Route path='/sop' element={<SopAccessPannel /> }/>
      </Routes>
   </BrowserRouter>
    </>
}

export default App;
