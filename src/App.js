import logo from './logo.svg';
import './App.css';
import EmployeeContainer from './components/EmployeeContainer/EmployeeContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <EmployeeContainer />
    </div>
  );
}

export default App;
