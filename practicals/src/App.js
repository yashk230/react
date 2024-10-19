import './App.css';
// import Claro from './Claro';
// import TextReader from './TextReader';
import ChildComp from './ChildComp';
import FruitBat from './FruitBat';
import FruitMerge from './FruitMerge';
import Uppercase from './Uppercase';
import UseEffectHook from './useEffectHook';
import Week from './Week';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div>
          {<UseEffectHook></UseEffectHook>}
        </div>
        <div>
          {<ChildComp name="Yash" city="Pune"></ChildComp>}
        </div>
          <div>
            {<Week></Week>}
          </div>
          
          <p>{<FruitBat></FruitBat>}</p>

          <p>{<Uppercase name="yash"></Uppercase>}</p>

          <p>{<FruitMerge></FruitMerge>}</p>
        {/* <div>
        <TextReader></TextReader>
        </div>
        <div>
          {<Claro></Claro>}
        </div> */}
      </header>
    </div>
  );
}


export default App;