import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Collection, CollectionSingle} from './pages'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/:id" element={<CollectionSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
