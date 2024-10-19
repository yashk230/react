import './App.css';
// import Claro from './Claro';
// import TextReader from './TextReader';
import Login from './login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{<Login></Login>}</div>
        {/* <div>
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

          <p>{<FruitMerge></FruitMerge>}</p> */}
      </header>
    </div>
  );
}


export default App;