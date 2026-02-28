import logo from './logo.svg';
import './App.css';
import work from './work';

function App() {
  const arr=[1,2,3,4,5]
  const arrob={
    Name:"Srimathi",
    Department:"CSE",
    College:"Muthayammal Engineering College"
  }
 return(
    <div>
      
      <work test={arr} completed={arrob} />

    </div>
  )
}
export default App;