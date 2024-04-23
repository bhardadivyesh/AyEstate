import './App.css'
import Homepage from './Home/HomePage/Homepage';
import ListingMain from './Listings/ListingMain/ListingMain';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  

  return (
 <>
<BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='listing' element={<ListingMain />}/>
        </Routes>
      </BrowserRouter>
  
 </>
  )
}

export default App
