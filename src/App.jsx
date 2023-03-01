import { useState } from 'react';
import data from './assets/data.json';
import Card from './components/card/card';

import espacio1 from '../src/assets/espacio1.jpg'
import espacio2 from '../src/assets/espacio2.jpg'
import espacio3 from '../src/assets/espacio3.jpg'
import espacio4 from '../src/assets/espacio4.jpg'
import espacio5 from '../src/assets/espacio5.jpg'
import espacio6 from '../src/assets/espacio6.jpg'
import espacio7 from '../src/assets/espacio7.jpg'

import './App.css';

function App() {
  const background = [
    espacio1,
    espacio2,
    espacio3,
    espacio4,
    espacio5,
    espacio6,
    espacio7,
  ];
  const [imageVisible, setImageVisible] = useState(
    Math.floor(Math.random() * (background.length - 1)),
  );

  const changeImage = () => {
    const newImageVisible = imageVisible + Math.floor(Math.random() * 5)

    if (newImageVisible > background.length -1)
      setImageVisible(Math.floor(Math.random() * (background.length -1)));
    else if (newImageVisible === imageVisible)
      setImageVisible(Math.floor(Math.random() * (background.length - 1)));
    else setImageVisible(newImageVisible);
  };

  const [dataVisible, setDataVisible] = useState(
    Math.floor(Math.random() * (data.length - 1)),
  );

  const changeData = () => {
    const newDataVisible = dataVisible + Math.floor(Math.random() * 5);

    if (newDataVisible > data.length -1)
      setDataVisible(Math.floor(Math.random() * (data.length -1)));
    else if (newDataVisible === dataVisible)
      setDataVisible(Math.floor(Math.random() * (data.length - 1)));
    else setDataVisible(newDataVisible);
  };

  const both = () => {
    changeData();
    changeImage();
  };

  return (
    <>
      <style>
        {`
      body{
        background-image: url(${background[imageVisible]});
        background-repeat: no-repeat;
        background-size: cover;
      `}
      </style>
      <div className="App">
        <h1>CURIOSIDADES DEL ESPACIO</h1>
        <Card framework={data[dataVisible]} changeFramework={both} />
      </div>
    </>
  );
}

export default App;
