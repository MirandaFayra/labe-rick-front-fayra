import Router from './routes/index'
import './App.css';
import GlobalState from './contexts/GlobalState';

function App() {
  return (
   <GlobalState>
      <Router/>
   </GlobalState>
  );
}

export default App;
