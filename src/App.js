import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import './produit';
import CardProduct from './component/CardProduct';
//import Prenom from './component/Prenom';
let firstman = 'Arona';

function App() {
  return (
    <div className="App">
      <CardProduct/> 
      {firstman ?
          <div>
            <p>Bonjour {firstman} </p>
            <img src='/Arona.jpg' alt='arona'/>
          </div>:
          <p>Bonjour ! </p>
      }
      
      

  
    
    </div>
  );
}

export default App;
