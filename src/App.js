import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Car />
      </header>
    </div>
  );
}

export default App;

function Car() {
  const carArray = [
    {
      brand: 'Ford',
      model: 'Mustang',
      year: '1964',
      color: 'red',
      image:
        'https://www.pikpng.com/pngl/b/70-707887_1969l-mustang-mach-ford-mustang-1969-png-clipart.png',
    },
    {
      brand: 'Nissan',
      model: 'GTR',
      year: '1969',
      color: 'orange',
      image: 'https://pngimg.com/uploads/nissan/nissan_PNG52.png',
    },
    {
      brand: 'Maruthi Suzuki',
      model: '800',
      year: '1983',
      color: 'racing white',
      image:
      'https://gomechprod.blob.core.windows.net/gm-retail-app/New%20Car%20Model%20Images/brand-9-model-195.png',
    },
  ];

  const [car, setCar] = useState(carArray[2]);

  return (
    <>
      <ul>
        <button
          onClick={() => {
            setCar(carArray[0]);
          }}
        >
          <img src="https://www.pikpng.com/pngl/b/70-707887_1969l-mustang-mach-ford-mustang-1969-png-clipart.png"></img>{' '}
          Ford Mustang
        </button>
      </ul>
      <ul>
        <button
          onClick={() => {
            setCar(carArray[1]);
          }}
        >
          <img src="https://pngimg.com/uploads/nissan/nissan_PNG52.png"></img>{' '}
          Ford Mustang
        </button>
      </ul>
      <ul>
        <button
          onClick={() => {
            setCar(carArray[2]);
          }}
        >
          <img src="https://www.pikpng.com/pngl/b/70-707887_1969l-mustang-mach-ford-mustang-1969-png-clipart.png"></img>{' '}
          Maruthi Suzuki
        </button>
      </ul>
      <img src={car.image}></img>
      <h2>
        {car.brand} {car.model}
      </h2>

      {car ? <h1>is true</h1> : <h2>is false</h2>}
    </>
  );
}
