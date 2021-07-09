import logo from './logo.svg';
import './App.css';

function App() {

   useEffect(()=>{
  axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
  .then(response => {
    console.log(response);
  })
  .catch(error =>{
    console.log(error);
  })

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
