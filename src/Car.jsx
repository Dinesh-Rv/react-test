import {useState} from 'react'

function Car() {
    const carArray = [
      {
        brand: 'Ford',
        model: 'Mustang',
        year: '1964',
        color: 'black',
        image:
          'https://www.pikpng.com/pngl/b/70-707887_1969l-mustang-mach-ford-mustang-1969-png-clipart.png',
      },
      {
        brand: 'Nissan',
        model: 'GTR',
        year: '1969',
        color: 'tangerine',
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
        <div className="listOfCars">
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
              <img src="https://gomechprod.blob.core.windows.net/gm-retail-app/New%20Car%20Model%20Images/brand-9-model-195.png"></img>{' '}
              Maruthi Suzuki
            </button>
          </ul>
        </div>
        <div className="carDetails">
          <img src={car.image}></img>
          <h2>
            {car.brand} {car.model}
          </h2>
          <h3>year: {car.year}</h3>
          <h3>color: {car.color}</h3>
        </div>
      </>
    );
  }

  export default Car