import './App.css';
import AppNavigator from './components/AppNavigator';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import ColorScreen from './container/ColorScreen';

function App() {
  return (
    <Router>
      <AppNavigator/>
      <Routes>
         <Route exact path='/colorScreen/:color' element={<ColorScreen/>}  />
      </Routes>
       </Router>
  );
}

export default App;
