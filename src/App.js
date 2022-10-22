import { Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </div>
  );
}

export default App;
