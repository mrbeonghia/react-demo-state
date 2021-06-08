import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";

function App(props) {
  return (
    <div className="App">
      <Student name="Khanh" age="20" gender="Nam">Student 1</Student>
      <Student name="Hoa" age="22" gender="Nu">Student 2</Student>
    </div>
  );
}

export default App;
