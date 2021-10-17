import logo from './logo.svg';
import './App.css';

function App() {
  const getNotes = () =>{
      console.log("we are awesome");
  };
  return (
    <div className="App">
     <div>Notes Application</div>
     <div>
       <button onClick={getNotes}>Click me !</button>
     </div>
    </div>
  );
}

export default App;
